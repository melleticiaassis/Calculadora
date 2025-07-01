const Display = document.getElementById('display')
function display(valor){
    Display.value += valor
}
function clearDisplay(){
    Display.value = ''
}
function clearDisplay(){
    Display.value = Display.value.substr(0, Display.value.length -1)
}
function result(){
    let textDisplay = Display.value
}