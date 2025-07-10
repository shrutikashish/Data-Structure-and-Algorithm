let arr = [56,23,45,78,95,43,35]
let position = 3
for(let i= position;i<arr.length;i++){
    
        arr[i]=arr[i+1]
        
}
arr.length = arr.length-1
console.log(arr)