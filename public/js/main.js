const backdrop = document.querySelector('.backdrop')
const sideDrawer = document.querySelector('.mobile_nav')
const menuToggle = document.querySelector('#side-menu-toggle')

const backdropClickHandler = () => {
  backdrop.getElementsByClassName.display = 'none'
  sideDrawer.classList.remove('open')
}

const menuToggleClickHandler = () => {
  backdrop.getElementsByClassName.display = 'block'
  sideDrawer.classList.add('open')
}

backdrop.addEventListener('click', backdropClickHandler)
sideDrawer.addEventListener('click', menuToggleClickHandler)
