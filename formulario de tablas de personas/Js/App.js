function enviar(){
    let nombre=document.getElementById('nombre').value
    let apellido=document.getElementById('apellido').value
    let telefono=document.getElementById('telefono').value
    let correo=document.getElementById('correo').value
    let asunto=document.getElementById('asunto').value

    let tabla = document.getElementById('tablaPersonas')
    let fila=""
    fila+=`
    <tr><td>${nombre}</td><td>${apellido}</td><td>${telefono}</td><td>${correo}</td><td>${asunto}</td></tr>`;
    tabla.innerHTML+=fila;

    
}