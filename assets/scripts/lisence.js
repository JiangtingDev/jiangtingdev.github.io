function plugin(hook, vm) {
    hook.afterEach(function (html, next) {
        next(
            html.replace("</footer>", `<br/><a href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank"><img alt="知识共享许可协议" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc.svg"/></a></footer>`)
        )
    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)