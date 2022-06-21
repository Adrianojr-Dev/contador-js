function verificar(){
var str = window.document.getElementById("str")
var strn = Number(str.value)
var end = window.document.getElementById("end")
var endn = Number(end.value)
var pace = window.document.getElementById("pace")
var pacen = Number(pace.value)
var res = window.document.getElementById("res")
if(pacen==0){
    window.alert("passo não pode ser igual a zero , alteramos para 1")
    pacen = 1
}
res.innerText = "preparando para contar..."
for(var c = strn;c<=endn;c+=pacen){
    res.innerText += `->${c} `
}
}