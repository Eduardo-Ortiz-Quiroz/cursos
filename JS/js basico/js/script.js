const h1 = document.querySelector('h1');
const form = document.querySelector('.formulario');
const pid = document.querySelector('#pid');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const img = document.createElement ('img');
const pResult = document.querySelector('#resultado');

img.setAttribute('src', 'https://cdn.pixabay.com/photo/2021/10/05/12/01/pizza-6682514_960_720.png');
pid.replaceWith(img);
img.classList.add('imagen');

form.addEventListener('submit', sumarInputs);

function sumarInputs(e){
    e.preventDefault();
    const sumaInputs = (parseInt(calculo1.value) + parseInt(calculo2.value));
    pResult.append(sumaInputs);   
}