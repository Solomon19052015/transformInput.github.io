(function(){

    let load = document.createElement('div');
    let kv = document.createElement('div');
    let h = document.createElement('h2');
    h.innerHTML = "ЗАГРУЗКА";
    document.body.insertBefore(load, document.body.firstChild);
   load.insertBefore(kv, load.firstChild);
   load.insertBefore(h, load.firstChild);
    load.classList.add('load');
    kv.classList.add('kv');
   
})();

document.body.onload = function() {
  //ЛОАДЕР

/*  setTimeout(function() {
  let load= document.querySelector(".load");
  let kv = document.querySelector(".kv");
 load.classList.add("closeLoad");
 kv.classList.add("kvClose");
}, 1000);
 */
  let primer = document.querySelector(".primer");
  let h = document.querySelector("h3");
  let mainPos = document.querySelector(":root");

  primer.addEventListener("mousemove", moveMouse);

  function moveMouse(e) {
    let x = e.clientX;
    let y = e.clientY;
    let funcPreobr = numbProc(x, y);
    let a = Math.round(funcPreobr[0] );
    let b = Math.round(funcPreobr[1]  );
    let comparX = comparisonX(a);
    let comparY = comparisonY(b);
    /*    h.innerHTML = a + " , " + b;  */
    mainPos.style.setProperty("--main-posX",  comparX   + "%");
    mainPos.style.setProperty("--main-posY",  comparY  + "%");
  }
//ПРЕВРД ПИКСЕЛЕЙ В ПРОЦЕНТЫ
  function numbProc(x, y) {
    let xP = (x * 100) / window.innerWidth;
    let yP = (y * 100) / window.innerHeight;
    let arr = [xP, yP];
    return arr;
  }

  //ЗОНЫ РЕАГИРОВАНИЯ НА ЭКРАНЕ
  function comparisonX(x) {
    let result = 0;
    if (x > 0 && x <= 25) {
        return (result = 20);
      } 
    if (x > 25 && x <= 50) {
        return (result = 45);
      } 
    if (x > 50 && x <= 75) {
      return (result = 70);
    }
    if (x >= 75) {
      return (result = 85);
    }
  
  }

  function comparisonY(x) {
    let result = 0;

    if (x > 0 && x <= 25) {
      return (result = 20);
    } 
    if (x > 25 && x <=50) {
      return (result = 45);
    } 
    if(x > 50 && x <=75) {
      return (result = 70);
    }
    if(x>75){
        return (result = 80);
    }
  } 
};


