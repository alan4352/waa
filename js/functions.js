    const button = document.getElementById('button');
    const fondo = document.getElementById('body');
    const titulo = document.getElementById('titulo');
    const texto = document.getElementById('letra');
    const historia = document.getElementById('historia');
    function botonaso(){
        if(fondo.style.backgroundColor == '#4F0112'){
        fondo.style.backgroundColor = 'black';
        texto.style.color = 'white';
        historia.style.color = 'white';
        }else{
        fondo.style.backgroundColor = '#4F0112';
        texto.style.color = 'black';
        historia.style.color = 'black';
        }
    }
    button.addEventListener('click', function () {
        if(fondo.style.backgroundColor == '#4F0112'){
            fondo.style.backgroundColor = 'black';
            texto.style.color = 'white';
            historia.style.color = 'white';
            }else{
            fondo.style.backgroundColor = '#4F0112';
            texto.style.color = 'black';
            historia.style.color = 'black';
            }
    });