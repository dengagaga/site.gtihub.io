const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
const modal = document.querySelector('.modal')
const modalTwo = document.querySelector('.modal-two')
const svgClose = document.querySelector('.svg-close')
const svgIcon = document.querySelector('.svg-icon')
const btnN = document.querySelector('.btn-n')
const headerInp = document.querySelector('.header-mid-inp')
const modalBoxInp = document.querySelector('.modal_box-inp')
const password = document.getElementById('password')
const entrance = document.getElementById('entrance')
const penalties1 = document.getElementById('penalties1')
const court1 = document.getElementById('court1')
const taxes1 = document.getElementById('taxes1')
const services1 = document.getElementById('services1')
const mobileLinks = document.querySelectorAll('.mobile-link')



menu.addEventListener('click', function () {
    burger.classList.toggle('active')
    menu.classList.toggle('close')
})
entrance.addEventListener('click', function(event){
    event.preventDefault()
    modal.classList.add('open')
})
svgClose.addEventListener('click', function(){
    modal.classList.remove('open')

})
svgIcon.addEventListener('click', function(){
    modalTwo.classList.toggle('open')

})
btnN.addEventListener('click', function(event){
    event.preventDefault()
    headerInp.classList.toggle('scale')

})
headerInp.addEventListener('dblclick' , function() {
    headerInp.value = 'ИНН 123456789012'
})
modalBoxInp.addEventListener('dblclick' , function() {
    modalBoxInp.value = 'vasha_pochta@pisem.net'
})
password.addEventListener('dblclick' , function() {
    password.value = 'sdasadsadsadsda'
    
})
mobileLinks.forEach((link, idx) => {
    link.addEventListener('click', function() {
        if (idx == '0') {
            penalties1.classList.toggle('dn')
        }
        if (idx == '1') {
            court1.classList.toggle('dn')
        }
        if (idx == '2') {
            taxes1.classList.toggle('dn')
        }
        if (idx == '3') {
            services1.classList.toggle('dn')
        }

    })
})


