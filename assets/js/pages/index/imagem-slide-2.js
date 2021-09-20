(function () {
  /* ---- Constants ---- */

  const TEMPO = 2
  const IMAGENS = [
    'https://minhatarefinha.com/files/images/index/mao-exemplo-1.png',
    'https://minhatarefinha.com/files/images/index/mao-exemplo-2.png',
    'https://minhatarefinha.com/files/images/index/mao-exemplo-3.png',
    'https://minhatarefinha.com/files/images/index/mao-exemplo-4.png',
    'https://minhatarefinha.com/files/images/index/mao-exemplo-5.png'
  ]

  /* ---- Global Variables ---- */

  let INDICE = 0
  let TIMEOUT = null

  /* ---- Elements ---- */

  const sectionExemplo = document.querySelector('section[name="exemplo"]')
  const img = sectionExemplo.querySelector('img')

  /* ---- Methods ---- */
  
  function habilitarEventos () {
    clickImagem()
  }

  /* ---- Events ---- */

  function clickImagem () {
    img.addEventListener('click', callbackClickImagem)
  }

  /* ---- Callbacks ---- */
  
  function callbackClickImagem () {
    renderizarProximaImagem()
    reiniciarTimer()
  }

  /* ---- View ---- */

  function renderizarProximaImagem () {
    INDICE = (INDICE === IMAGENS.length -1) ? 0 : INDICE + 1
    const url = IMAGENS[INDICE]
    importarImagem(url)
  }

  function importarImagem (url) {
    if (!url) return
    img.setAttribute('src', url)
  }

  /* ---- Timer ---- */

  function iniciarTimer () {
    const segundos = TEMPO * 1000
    TIMEOUT = setInterval(renderizarProximaImagem, segundos)
  }

  function reiniciarTimer () {
    clearInterval(TIMEOUT)
    iniciarTimer()
  }

  /* ---- Start ---- */

  habilitarEventos()
  iniciarTimer()
}())