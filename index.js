
//----------------Funciones------------------------------
let declaraObjetos = function(Nom1,Ape2,Tel3){
  return {
    nombre:Nom1,
    apellido:Ape2,
    telefono:Tel3,
  }
}

let mostrarArrreglo = function(){
  datos = JSON.parse(localStorage.getItem("Informacion")) 
  if (datos ==null )
  {datos=[]
  }
  else{
    
    console.log(JSON.parse(localStorage.getItem("Informacion")))
    datos.forEach((obj,index) => {
      let divInfo= document.createElement("div")
      divInfo.classList.add("marcoDatos")
      let parrafoInfo= document.createElement("p")
      let conteParra= document.createTextNode(`su nombre: ${obj.nombre} , su epllido es: ${obj.apellido}, su telfono es: ${obj.telefono}`)
      document.body.appendChild(divInfo)
      divInfo.appendChild(parrafoInfo)
      parrafoInfo.appendChild(conteParra)
  
      let botonesContenedor =  document.createElement("div")
      let eliminarBtn = document.createElement("button")
      eliminarBtn.setAttribute("id","borrar"+ index)
      eliminarBtn.classList.add("BotonEminar")
      let editarBtn = document.createElement("button")
      editarBtn.setAttribute("id","edita"+ index)
      editarBtn.classList.add("BotonEditar")
      botonesContenedor.appendChild(eliminarBtn)
      botonesContenedor.appendChild(editarBtn)
      divInfo.appendChild(botonesContenedor)

      eliminarBtn.innerText="eliminar"
      editarBtn.innerText="editar"
      eliminarBtn.addEventListener("click", (e)=>{
      datos.splice(index,1)
      localStorage.setItem("Informacion",JSON.stringify(datos))
      location.reload()
      })
      editarBtn.addEventListener("click",(e)=>{
         inpNombre.value=datos[index].nombre
         inpapellido.value=datos[index].apellido
        inpTelefono.value=datos[index].telefono

        btAgregar.innerText= "Editar"
        btAgregar.setAttribute("style","background-color:green")
        btAgregar.value=index
       })
    });
  }
 
 } 

//  ------------

let datos =[]
mostrarArrreglo()
  
// ----------------Captura de inp-------------------
let inpNombre = document.getElementById("nombre")
let inpapellido =document.getElementById("apellido")
let inpTelefono =document.getElementById("telefono")
console.log(inpNombre,inpapellido,inpTelefono)

// --------------------Captura de botones--------------
let btAgregar = document.getElementById("agregar")
let  btEditar=document.getElementById("editar")
let btEliminar =document.getElementById("eliminar")

//------------------eventos click--------------------------

btAgregar.addEventListener("click",(e)=>{
 if(btAgregar.innerText=="Editar"){
let nuevoObjeto = declaraObjetos(inpNombre.value, inpapellido.value,inpTelefono.value) 
datos.splice(btAgregar.value,1,nuevoObjeto)
 } 
 else{
  let textoNombre = inpNombre.value
  let textoApellido = inpapellido.value
  let textoTelefono = inpTelefono.value
  let objeto = declaraObjetos(textoNombre,textoApellido,textoTelefono)
  //console.log(declaraObjetos(textoNombre,textoApellido,textoTelefono))
  datos.push(objeto)
 }



localStorage.setItem("Informacion",JSON.stringify(datos))
location.reload()
})












