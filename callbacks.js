const paises = ['Francia', 'Holanda', 'Argentina', 'España', 'Portugal']

function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais)
        callback();
    }, 2000)
}

function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais)
        })
    }, 2000)
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises)