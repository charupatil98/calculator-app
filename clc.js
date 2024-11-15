function number(num){
    let res= document.getElementById("screen")
    res.value+=num
}

function result(){
    let res= document.getElementById("screen")
    res.value=eval(res.value)
}

function backspace(){
    let res= document.getElementById("screen")
    res.value= res.value.slice('0','-1')
}

function remove(){
    let res= document.getElementById("screen").value= "";
    

}