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
    menuProyectos.style.color = '#fc82b5'
    menuIndice.style.color = '#FFF'
    menuContacto.style.color = '#FFF'
})

menuIndice.addEventListener('click', function (){
    proyectos.style.display = 'none'
    contacto.style.display = 'none'
    quienSoy.style.display = 'block'
    menuProyectos.style.color = '#FFF'
    menuContacto.style.color = '#FFF'
    menuIndice.style.color = '#fc82b5'
})

menuContacto.addEventListener('click', function (){
    quienSoy.style.display = 'none'
    proyectos.style.display = 'none'
    contacto.style.display = 'flex'
    menuProyectos.style.color = '#FFF'
    menuIndice.style.color = '#FFF'
    menuContacto.style.color = '#fc82b5'
})

menuIndice.addEventListener('mouseover', function(){
    menuIndice.style.color = '#fc82b5'
})
menuProyectos.addEventListener('mouseover', function(){
    menuProyectos.style.color = '#fc82b5'
})
menuContacto.addEventListener('mouseover', function(){
    menuContacto.style.color = '#fc82b5'
})

menuContacto.addEventListener('mouseleave', function(){
    if (contacto.style.display !== 'flex') {
        menuContacto.style.color = '#FFF'
    }
})
menuProyectos.addEventListener('mouseleave', function(){
    if (proyectos.style.display !== 'flex') {
        menuProyectos.style.color = '#FFF'
    }
})
menuContacto.addEventListener('mouseleave', function(){
    if (contacto.style.display !== 'flex') {
        menuContacto.style.color = '#FFF'
    }
})