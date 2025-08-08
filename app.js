// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosIngresados = 0;
let nombreIngresado = "";

function agregarAmigo(){
    
    //Aqui se ingresan los nombres uno por uno
    nombreIngresado= document.getElementById("amigo").value;
    const miLista = document.getElementById("listaAmigos");

    if (nombreIngresado === "" || nombreIngresado.includes(" ")){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombreIngresado);
        console.log(amigos);
        nombreIngresado = "";
        amigosIngresados ++;
        limpiarCampo();
        
    }
        //agregar un elemento para agregar elementos por lenght 0,1,2,3 del arreglo
        miLista.innerHTML = "";
        amigos.forEach(elemento => {

        const nuevoItem = document.createElement("li");

        nuevoItem.textContent = elemento;
        miLista.appendChild(nuevoItem);
        
    });


}

function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){

    const nombresSorteados = [...amigos];
    const amigoSorteado = document.getElementById("resultado");
    const amigoSecreto = document.createElement("li");

    nombresSorteados.sort(() => Math.random() - 0.5);
    const primerSorteado = nombresSorteados[0];
    amigoSorteado.innerHTML = "";

    amigoSecreto.textContent = (`El amigo secreto es: ${primerSorteado}`);
    amigoSorteado.appendChild(amigoSecreto);

}
