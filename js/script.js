const Display = document.getElementById('display')

function display(valor){
    Display.value += valor
}

function clearDisplay(){
    Display.value = ''
}

function clearEntry(){
    Display.value = Display.value.slice(0, -1)
}

function result(){
    try{
        Display.value = eval(Display.value)
    } catch{
        Display.value = 'Erro'
    }
}
