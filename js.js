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





let input = document.querySelector(".psev");
let hh = document.querySelector(".ps");
let arrayVal = []; 
let count =0;

input.addEventListener("input", eventInput);

function inputValNow(el){
    let inputVal = el.value;
    let leng = inputVal.length-1;
    let lastCh = inputVal[leng];
    return lastCh;
}

function clearval(el){
    el = "";
    return el;
}

function generateEl(elVal){
 
    let el = document.createElement('span');
    el.innerHTML = elVal;
    el.classList.add("ss");
    setTimeout(function(){
        el.classList.add("sss");
    },50)
 
    hh.appendChild(el);
    count++;
    return el;
}

function eventInput(){

    let allSpan = document.querySelectorAll(".g .ss");
    console.log(allSpan.length);
  
    for(let i =26; i < allSpan.length; i++){
        let el = allSpan[i];
        el.remove()
    }

    
    generateEl(inputValNow(input))
 }


