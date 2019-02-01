let primer = document.querySelector(".primer");
let h = document.querySelector("h3");
let mainPos = document.querySelector(":root");

primer.addEventListener("mousemove", moveMouse);

function moveMouse(e){
    let x = e.clientX;
    let y = e.clientY;
    let funcPreobr = numbProc(x,y);
     let a = Math.round(funcPreobr[0]) ;
    let b = Math.round(funcPreobr[1]) ;
    let comparX =  comparisonX(a);
   let comparY =  comparisonY(b);
  
 mainPos.style.setProperty('--main-posX', comparX + "%");
 mainPos.style.setProperty('--main-posY', comparY + "%");

}

function numbProc(x,y){
    let xP = (x * 100)/window.innerWidth; 
    let yP = (y * 100)/window.innerHeight; 
    let arr = [xP,yP];
    return arr;
}

function comparisonX(x){
    let result = 0;
  if(x > 50){
   return result = 70;
  }
  else{
     return result = 30
  }
  
}

function comparisonY(x){
    let result = 0;
  if(x > 50){
   return result = 55;
  }
  else{
     return result = 45
  }
  
}