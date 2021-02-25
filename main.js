document.getElementById('textInput').addEventListener('input',function(e){
var text =  document.getElementById("textInput").value; 
document.getElementById("header").innerHTML = text; 
},false);
function resetInput(){
   document.getElementById("textInput").value = ""
   document.getElementById("header").innerHTML = "Se ha eliminado exitosamente.";
}
