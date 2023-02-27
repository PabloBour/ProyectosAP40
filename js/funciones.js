   

   /* El formate de fecha es mm/dd/aaaa
   La edad se actualiza automaticamente el día del cumpleaños */
   
   let nacimiento= new Date('05/04/1976');
   let hoy = new Date();
   let edad = hoy.getFullYear() - nacimiento.getFullYear();
       
   if(hoy.getMonth() < nacimiento.getMonth() || hoy.getDate()   < nacimiento.getDate()  )   {
       edad = edad -1 ;
       
   }
   
   console.log(edad)
   
   document.getElementById("edad").innerHTML = "Edad: " + edad + " años."

   
   
   
const btnEstudios = document.getElementById("verEstudios");
const btnCursos = document.getElementById("verCursos");
const btnExperienciaLaboral = document.getElementById("verExperienciaLaboral");
const estudiosText = document.getElementById("estudios");
const cursostext = document.getElementById("cursos");
const experienciaLaboralText = document.getElementById("experienciaLaboral");

btnEstudios.onclick = function () {
    estudiosText.style.display = "block";
    cursostext.style.display = "none";
    experienciaLaboralText.style.display = "none";
}

btnCursos.onclick = function () {
    estudiosText.style.display = "none";
    cursostext.style.display = "block";
    experienciaLaboralText.style.display = "none";
}

btnExperienciaLaboral.onclick = function () {
    estudiosText.style.display = "none";
    cursostext.style.display = "none";
    experienciaLaboralText.style.display = "block";
}