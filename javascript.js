var menuProyectos = document.getElementById('menuProyectos')
var quienSoy = document.getElementById('quienSoy')
var proyectos = document.getElementById('proyectos')
var menuIndice = document.getElementById('menuIndice')
var menuContacto = document.getElementById('menuContacto')
var contacto = document.getElementById('contacto')

menuProyectos.addEventListener('click', function (){
    quienSoy.style.display = 'none'
    contacto.style.display = 'none'
    proyectos.style.display = 'flex'
})

menuIndice.addEventListener('click', function (){
    proyectos.style.display = 'none'
    contacto.style.display = 'none'
    quienSoy.style.display = 'flex'
})

menuContacto.addEventListener('click', function (){
    quienSoy.style.display = 'none'
    proyectos.style.display = 'none'
    contacto.style.display = 'flex'
})

