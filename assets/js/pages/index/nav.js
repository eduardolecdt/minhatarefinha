(function (){

  // Variables

  const nav = document.querySelector('nav')
  const menu = nav.querySelector('div[name="menu"]')
  const botaoMenu = nav.querySelector('button[name="abrirMenu"]')

  // ADICIONAR CLASSE AO SCROLLAR

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) nav.classList.remove('scroll')
      else nav.classList.add('scroll')
    })
  }

  // ABRIR MENU

  function abrirMenu () {
    nav.addEventListener('click', (elemento) => {
      const abrirMenu = 'button[name="abrirMenu"]'
      if (!elemento.target.matches(abrirMenu)) return
      
      const menuAberto = menu.classList.contains('mostrar')
      if (menuAberto) menu.classList.remove('mostrar'), botaoMenu.classList.remove('ativo')
      else menu.classList.add('mostrar'), botaoMenu.classList.add('ativo')
    })
  }

  // Start
  adicionarClasse()
  abrirMenu()

}())

