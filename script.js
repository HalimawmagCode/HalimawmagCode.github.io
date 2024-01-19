let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bx-x')
})
var typed= new Typed(".hobby", {
    strings:["Basketball Player","Volleyball Player", "IT Student"],
    typeSpeed:50,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
