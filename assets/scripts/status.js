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
    timeoutFetch(5000)("https://api.jiangting.top/status/?")
        .then(response => response.json())
        .then(data => update(data))
        .catch(error => {update(false)});
}

function update(data) {
    if (!data) {
        document.getElementById("be-host").innerHTML = "获取失败";
        document.getElementById("be-version").innerHTML = "获取失败";
        document.getElementById("be-players").innerHTML = "获取失败";
    } else {
        document.getElementById("be-host").innerHTML = `${data.host}<br>端口：${data.port}`;
        document.getElementById("be-version").innerHTML = `${data.version.name}&nbsp(${data.version.protocal})<br/>`;
        document.getElementById("be-players").innerHTML = `${data.players.online}/${data.players.max}`;
    }
}

fetchData();
setInterval(() => {fetchData()}, 10000);