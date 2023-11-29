const switchs = {}

function onSwitch(id) {
    let swich = document.getElementById(id);
    let childs = swich.childNodes
    let content = childs[1].childNodes
    if (childs[0]) {
        childs[0].style.transform = `translate(${switchs[id]?"0":"30px"}, -50%)`; 
        content[0].style.transform = `translate(${switchs[id]?"-30px":"6px"}, 0)`;
        content[1].style.transform = `translate(${switchs[id]?"0":"36px"}, 0)`; 
        swich.style.background = switchs[id]?"#FF9C7D":"#19D09F";
        switchs[id] = !switchs[id]; 
    } 
}

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
    timeoutFetch(3000)("https://api.jiangting.top/status/?")
        .then(response => response.json())
        .then(data => {
            document.getElementById("data").innerHTML = `游玩地址：mc.jiangting.top<br/>
            游玩端口：19132<br/>
            游戏版本：${data.version.name} (${data.version.protocal})<br/>
            在线人数：${data.players.online}/${data.players.max}<br/>
            数据时间：${data.time}`
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function getTimeStr() {
    const now = new Date()
    return `${now.getFullYear()}.${now.getMonth().toString().padStart(2, "0")}.${now.getDate().toString().padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
}

fetchData()
setInterval(() => {if (switchs.auto) fetchData()}, 5000)