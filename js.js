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
    h.innerHTML = a + "     " + b;
   let comparX =  comparison(a);
   let comparY =  comparison(b);
  
 mainPos.style.setProperty('--main-posX', comparX + "%");
 mainPos.style.setProperty('--main-posY', comparY + "%");

}

function numbProc(x,y){
    let xP = (x * 100)/1350; 
    let yP = (y * 100)/580; 
    let arr = [xP,yP];
    return arr;
}

function comparison(x){
    let result = 0;
  if(x > 50){
   return result = 100;
  }
  else{
     return result = 0
  }
  
}