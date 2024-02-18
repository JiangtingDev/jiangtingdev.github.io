const refreshSwitch = document.getElementById("switch")

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
    timeoutFetch(4000)("https://api.jiangting.top/status/?")
        .then(response => response.json())
        .then(data => {
            document.getElementById("data").innerHTML = `游玩地址：mc.jiangting.top<br/>
            游玩端口：19132<br/>
            游戏版本：${data.version.name} (${data.version.protocal})<br/>
            在线人数：${data.players.online}/${data.players.max}<br/>
            数据时间：${data.time}`
        })
        .catch(error => {
            //console.error("Loding err:", error);
        });
}

function getTimeStr() {
    const now = new Date()
    return `${now.getFullYear()}.${now.getMonth().toString().padStart(2, "0")}.${now.getDate().toString().padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
}

fetchData()
setInterval(() => {if (refreshSwitch.checked) fetchData()}, 5000)