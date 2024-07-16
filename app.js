//let titulo =document.querySelector('h1');
//titulo.innerHTML="Juego del número secreto";

//let parrafo=document.querySelector('p');
//parrafo.innerHTML="Selecciona un número del 1 al 10";

let numeroSecreto = 0;
let intentos=0;  
let listaNumerosSorteados=[];  
let numeroMaximo= 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}


function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);// habilitas el input o cuadro de texto de captura
    
    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ?'vez' :'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // en esta línea habilitas el boton nuevo juego cuando acierta
    }else {
        //EL USUARIO NO ACERTÓ
        if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p',"El número secreto es menor");    
        }else{
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
        
        
        return;
}

function limpiarCaja(){ // creas la función para limpiar el cuadro de texto de captura
    document.querySelector('#valorUsuario').value='';
       
}

function generarNumeroSecreto() {
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length== numeroMaximo){
      asignarTextoElemento('p', "Ya se sortearon todos los números posibles");

   } else {
        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);// agrega al arreglo el numero generado para que no se repita
            return numeroGenerado;
        }
          }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p',`Selecciona un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    // indicar intervalo de números
    // generar el número aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


