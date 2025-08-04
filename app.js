// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosIngresados = 0;
let nombreIngresado = "";


function agregarAmigo(){
    nombreIngresado= document.getElementById("amigo").value;

    if (nombreIngresado === "" || nombreIngresado.includes(" ")){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombreIngresado);
        console.log(amigos);
        nombreIngresado = "";
        amigosIngresados ++;
        
    }
    
}

function sortearAmigo(){

}
