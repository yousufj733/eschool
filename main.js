function toggleMobileMenu(menu) 
{
    menu.classList.toggle('open');
}




const head =document.querySelector('.sticky-header')
window.addEventListener('scroll',fixNav)

function fixNav()
{
  if (window.scrollY > head.offsetHeight + 100 ) {
    head.classList.add('active')
  }
  else 
  {
    head.classList.remove('active')
  }
}


