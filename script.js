let menu =document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    if(!menu.classList.contains('bx-x')){
        navlist.classList.remove('open');
    }
}
document.querySelectorAll('.character img, .toggle-info').forEach(item => {
    item.addEventListener('click', function() {
        const info = this.parentElement.querySelector('.info');
        
        info.classList.toggle('active');
    });
});