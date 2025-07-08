let arr = [23,67,54,32,87,43,23,34,22,45]
for(let i=0; i<arr.length; i++){
    document.write(`Array ${i} ${arr[i]} <br>`)
}
function traverse(){
    let inputText = document.getElementById("input").value
    if(inputText<arr.length && typeof parseInt(inputText)=== "number"){
        alert(arr[inputText])
    }
    else{
        alert("Please Give Valid Number")
    }
    

}
