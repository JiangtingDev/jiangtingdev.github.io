function timeoutFetch(timeOut = 1000) {
    return function (url, options) {
        return new Promise((resolve, reject) => {
            const singalController = new AbortController()
            fetch(url, {
                ...options,
                signal: singalController.signal
            }).then(resolve, reject)
            setTimeout(() => {
                reject(new Error('fetch timout'))
                singalController.abort()
            }, timeOut)
        })
    }
}

function fetchData() {
    timeoutFetch(5000)("https://api.jtmc.cc/status/all/")
        .then(response => response.json())
        .then(data => {update(data.je, "je"); update(data.be, "be");})
        .catch(error => {update(false, "je"); update(false, "be");});
}

function update(data, id) {
    if (!data) {
        document.getElementById(`${id}-host`).innerHTML = "获取失败";
        document.getElementById(`${id}-version`).innerHTML = "获取失败";
        document.getElementById(`${id}-players`).innerHTML = "获取失败";
    } else if (data.status != "online") {
        document.getElementById(`${id}-host`).innerHTML = "服务器未开启";
        document.getElementById(`${id}-version`).innerHTML = "服务器未开启";
        document.getElementById(`${id}-players`).innerHTML = "服务器未开启";
    } else {
        document.getElementById(`${id}-host`).innerHTML = `${data.host}${id == "be" ? ("<br>端口：" + data.port) : ""}`;
        document.getElementById(`${id}-version`).innerHTML = `${data.version.name}&nbsp(${data.version.protocal})<br/>`;
        document.getElementById(`${id}-players`).innerHTML = `${data.players.online}/${data.players.max}`;
    }
}

fetchData();
setInterval(() => {fetchData()}, 10000);
