let valor1//declarar dos variables.globales
let operacion
function uno(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
         valor=0
    }
    document.getElementById(pantalla).value=10*(parseInt(valor))+1
}
function dos(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }
    document.getElementById(pantalla).value=10*(parseInt(valor))+2
}
function tres(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }

    document.getElementById(pantalla).value=10*(parseInt(valor))+3
}
function cuatro(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valo=0
    }
    
    document.getElementById(pantalla).value=10*(parseInt(valor))+4
}
function cinco(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }
    document.getElementById(pantalla).value=10*(parseInt(valor))+5
}
function sies(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }
    
    document.getElementById(pantalla).value=10*(parseInt(valor))+6
}
function siete(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }
    
    document.getElementById(pantalla).value=10*(parseInt(valor))+7
}
function ocho(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0  
    }
           
    document.getElementById(pantalla).value=10*(parseInt(valor))+8
}
function nueve(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }
        
    
    document.getElementById(pantalla).value=10*(parseInt(valor))+9
}
function cero(){
    valor=document.getElementById('pantalla').value
    if(valor===""){
        valor=0
    }
    
    document.getElementById(pantalla).value=10*(parseInt(valor))+0
}
    function igual() {
        if (operacion=== 'suma'){  
        valor2=document.getElementById('pantalla').value
        let total=parseInt(valor1)+parseInt(valor2)
        document.getElementById('pantalla').value=total
        valor1=document.getElementById('pantalla').value
        }
        else if(operacion==='resta'){
            valor2=document.getElementById('patalla').value
            let total=parseInt(valor1)*parseInt(valor2)
            documet.getElementById('patalla').value=total
            valor1=documet.getElementById('pantalla').value
        }
        else if (operacion='multiplicacion'){
            valor=documet.getElementById('pantalla').value
            let total=parseInt(valor1)*parseInt(valor2)
            document.getElementById('pantalla').value=total
            valor1=documet.getElementById('pantalla').value
        }   
    }

