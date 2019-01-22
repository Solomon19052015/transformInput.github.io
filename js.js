let go = document.querySelector(".go");
let twoWord = document.querySelector(".twoWord");

function myWord(){
let word = document.querySelector(".word");

let count = 0;

let wordChange = function (){
    let txt = document.querySelector(".text").value;
    let textVal = txt.innerHTML;
    let arrayCh = [];
    for(let i =0; i < txt.length; i++){
        arrayCh.push(txt[i]);
      
    }
    return arrayCh;
}

let resultMas = wordChange();
console.log(resultMas);
function generateSym(cont){
     
     let el = document.createElement('span');
     el.innerHTML = cont;
     el.classList.add("sym" + count);
     el.classList.add("sym");
     twoWord.appendChild(el);
     count++;
return el;
}

function styleWord(el){
  
    setTimeout(function(){
         el.classList.add("symm");
     },100)
  }
  
function view(array){
let counter= 0;
 
    let generatInerval = setInterval(function(){
        
        let z= generateSym(array[counter]);
        styleWord(z);
        if(counter == resultMas.length-1 ){
           stop(generatInerval);
        }
        else if(resultMas.length <= 0){
            stop(generatInerval);
        }
        counter++;

    },100)
         
         function stop(name){
             clearInterval(name);
             return;
         }
}

view(resultMas);
}

go.addEventListener("click",()=>{
 twoWord.innerHTML = "";
    (function a (){
        myWord();
    })()

})