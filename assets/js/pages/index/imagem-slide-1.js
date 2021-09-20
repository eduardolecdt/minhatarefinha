(function () {
  /* ---- Constants ---- */

  const TEMPO = 2
  const IMAGENS = [
    'https://minhatarefinha.com/files/images/index/mao-previa-1.png',
    'https://minhatarefinha.com/files/images/index/mao-previa-2.png',
    'https://minhatarefinha.com/files/images/index/mao-previa-3.png',
    'https://minhatarefinha.com/files/images/index/mao-previa-4.png',
    'https://minhatarefinha.com/files/images/index/mao-previa-5.png'
  ]

  /* ---- Global Variables ---- */

  let INDICE = 0
  let TIMEOUT = null

  /* ---- Elements ---- */

  const sectionPrevia = document.querySelector('section[name="previa"]')
  const img = sectionPrevia.querySelector('img')

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