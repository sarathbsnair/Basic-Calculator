function displaybuttononscreen(val)
{
    
    document.getElementById("Screen").value=document.getElementById("Screen").value+val;

    
}
function displayclear(){

    document.getElementById("Screen").value=""

}
function equalto(){
    var text= document.getElementById("Screen").value
    var result=eval(text)
    document.getElementById("Screen").value=result
}