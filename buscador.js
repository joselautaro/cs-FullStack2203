const resultado = document.querySelector('#resultado');

const formulario = document.querySelector('#formulario');

const filtrar = () =>{
    resultado.innerHTML = ''

    const texto = formulario.value.toLowerCase();

    for(let producto of productos){

        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1){

            resultado.innerHTML += `
                    <div class="card" style="18rem;" id="resultado">
                            <img src=${producto.imagen} class="card-img-top" alt="imagen-negra">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                            <h5 class="card-title">Destino: ${producto.destino}</h5>
                            <p class="card-text"> Valor:${producto.valor}</p>
                        </div>
                    </div>
            `

        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML = `<b><p>❌Producto no encontrado❌</p></b>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();

