const $html = document.querySelector('html')
const $button = document.querySelector('#switch')
const $button2 = document.querySelector('#switch2')



$button.addEventListener('click',function(){
    $html.classList.toggle('dark-mode')
})

$button2.addEventListener('click',function(){
    $html.classList.toggle('blue-mode')
})

