const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const nav = document.querySelector('#nav');
console.log(nav)
console.log(abrir)
console.log(cerrar)
abrir.addEventListener('click', ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', ()=> {
    nav.classList.remove("visible");
})