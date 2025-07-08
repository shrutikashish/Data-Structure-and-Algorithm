let data = [32,43,24,7,15,17,2]
let position = 4
let newEl = 26

for(let i=data.length-1 ;i>=0;i--){
    if(i>=position){
        data[i+1]= data[i]
        if(i == position){
            data[i] = newEl
        }
    
    }
    document.write(` Array ${i} ${data[i]} <br>`)
    }
        
        
        

    


