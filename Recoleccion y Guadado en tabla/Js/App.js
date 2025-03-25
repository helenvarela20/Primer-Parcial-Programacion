function agregarDatos() {
    //recolectar Informatica
    let nombre =prompt("Ingresa tu Nombre");
    let edad =prompt("Ingrese tu edad");
    //apuntar a  la tabla creada a traves de un ID
    let tabla =document.getElementById('tablapersonas');
    //crear una nueva fila (tr)
    let fila=""
    
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></tr>`;
    tabla.innerHTML+=fila;    
}
    
