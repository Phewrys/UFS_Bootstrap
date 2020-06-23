(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[ufs-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[ufs-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[ufs-link]')
            .forEach(link => {
                link.href = link.attributes['ufs-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[ufs-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()