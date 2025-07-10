let arr = [56,23,45,78,95,43,35]
let position = 3
for(let i= position;i<arr.length-1;i++){
    
      //  arr[i]=arr[i+1]
        
}
arr.length = arr.length-1
console.log(arr)

function removeEl(){
        let data = [24,36,45,78,65,43,24]
        let  position1 = document.getElementById("position").value;
         position1 = parseInt(position1)
        for(let i= position1;i<data.length-1;i++){
                data[i]=data[i+1]
                
        }
        data.length = data.length-1
        console.log(data)
}