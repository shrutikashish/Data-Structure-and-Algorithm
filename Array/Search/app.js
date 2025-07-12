let elem = [24,34,56,45,67,23]
let search = 55
let index = undefined;
for(let i=0;i<elem.length;i++){
   
    if(search === elem[i]){
        index = i
        break
    }
    
}
if(!index){
   // console.log(`${search} data is not defined`)

}

function searchs(){
    let element = [65,34,23,78,18,32]
    let searchElem = document.getElementById("Search").value;
    let indexes = undefined;

    for(let i=0;i<element.length-1;i++){
        
        if( element[i] === parseInt(searchElem) ){
            indexes = i
            break
        }
        
    }
    console.log(indexes)
    if(!indexes){
        console.log(`${searchElem} data is not defined`)
    
    }
    
}




