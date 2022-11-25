const productos = [
    {
        nombre: 'Mesa',
        destino: 'Comedor',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Escritorio',
        destino: 'Oficina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Lavarropas',
        destino: 'Lavadero',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 600
    },
    {
        nombre: 'Televisor',
        destino: 'Living',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Silla',
        destino: 'Living',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Sofá',
        destino: 'Living',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Termo',
        destino: 'Cocina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Estufa',
        destino: 'Multiuso',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Rollo de cocina',
        destino: 'Cocina',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Celular',
        destino: 'Bolsillo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Billetera',
        destino: 'Bolsillo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Reloj',
        destino: 'Brazo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Pulsera',
        destino: 'Brazo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Brazalette',
        destino: 'Brazo',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Puerta',
        destino: 'Multiuso',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Computadoras Escritorio',
        destino: 'Multilugar',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Computadoras Portátiles',
        destino: 'Multilugar',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Bicicletas',
        destino: 'Garage',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Lapicera',
        destino: 'Multilugar',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Anteojos',
        destino: 'Escritorio',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    {
        nombre: 'Pantalones',
        destino: 'Armario',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
];


//Utilizamos el método getElementById de DOM (Document Object Model)
const producto = document.getElementById("resultado");

//Otras tres maneras de ir a nuestro DOM
//document.getElementByTagName = ir a la etiqueta mediante etiqueta/tag
//document.getElementByClassName = ir a la etiqueta mediante atributo class
//document.querySelector = ir a el dom mediante un selector universal

const catalogo = () => {

    for (let producto of productos) {
        producto.innerHTML += `
                <div class="card" style="width: 18rem;" id="resultado">
                        <img src=${producto.imagen} class="card-img-top" alt="imagen-negra">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                        <h5 class="card-title">Destino: ${producto.destino}</h5>
                        <p class="card-text"> Valor: ${producto.valor}</p>
                    </div>
                </div>
        `
    }

}