//toggle
let menubtn = document.getElementById('menubtn')
mentbtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('moile-nav-active');
    this.classList.toggle('bi-x-lg')
})