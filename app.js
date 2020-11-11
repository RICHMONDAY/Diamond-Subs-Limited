//////for hamburger menu
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
   
    
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
   
   

}


const link = document.querySelector('.header__menu-link');
link.addEventListener('click', e => {
    e.preventDefault();
})