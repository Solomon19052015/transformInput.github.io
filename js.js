(function(func) {
  let h = document.createElement("h2");
  h.innerHTML = "ЗАГРУЗКА";
  let load = document.createElement("div");
  let kv = document.createElement("div");
  document.body.insertBefore(load, document.body.firstChild);
  load.insertBefore(kv, load.firstChild);
  load.insertBefore(h, load.firstChild);
  load.classList.add("load");
  kv.classList.add("kv");
  func();
})(onloadDoc);

function onloadDoc() {
  document.body.onload = function() {
    //ЛОАДЕР

    setTimeout(function() {
      let load = document.querySelector(".load");
      let kv = document.querySelector(".kv");
      let h = document.querySelector(".load h2");
      load.classList.add("closeLoad");
      kv.classList.add("kvClose");
      h.classList.add("closeH");
    }, 1000);

    let primer = document.querySelector(".primer");
    let h = document.querySelector("h3");
    let mainPos = document.querySelector(":root");

    primer.addEventListener("mousemove", moveMouse);

    function moveMouse(e) {
      let x = e.clientX;
      let y = e.clientY;
      let funcPreobr = numbProc(x, y);
      let a = Math.round(funcPreobr[0]);
      let b = Math.round(funcPreobr[1]);
      let comparX = comparisonX(a);
      let comparY = comparisonY(b);
      /*    h.innerHTML = a + " , " + b;  */
      mainPos.style.setProperty("--main-posX", comparX + "%");
      mainPos.style.setProperty("--main-posY", comparY + "%");
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
      if (x > 25 && x <= 50) {
        return (result = 45);
      }
      if (x > 50 && x <= 75) {
        return (result = 70);
      }
      if (x > 75) {
        return (result = 80);
      }
    }

    //Нажатие на ссылку

    let bg = document.querySelector(".Bg");
    let linkMyWorks = document.querySelector(".linkMyWorks");
    let linkMyWorksMobile = document.querySelector(".linkMyWorksMobile");
    let linkMyStory = document.querySelector(".linkMyStory");
    let linkMyStoryMobile = document.querySelector(".linkMyStoryMobile");
    linkMyWorks.addEventListener("click", function() {
      clickLink(bg);
    });
    linkMyWorksMobile.onclick = function() {
      clickLink(bg);
      effetctText();
    };

    linkMyStoryMobile.onclick = function() {
      clickLink(bg);
      effetctText();
    };

    linkMyStory.addEventListener("click", function() {
      clickLink(bg);
      effetctText();
      /* let hi = document.querySelector(".hi");
    hi.style.display = "none"; */
    });

    function clickLink(el) {
      el.classList.add("bgShak");
      setTimeout(function() {
        el.classList.remove("bgShak");
      }, 400);
    }

    //ЭФФЕКТ ПАДЕНИЯ ТЕКСТА
    function effetctText() {
      let hi = document.querySelector(".hi");
      let sect1_cont = document.querySelector(".sect1_cont");
      let cloneHi = document.createElement("h1");
      cloneHi.classList.add("newH");

      let count = 0;
      cicle(contText, rotateEffect);

      function contText() {
        let hiText = hi.innerHTML;
        return hiText;
      }
//Создаем спан в h
      function generateSpan(cont) {
        count++;

        let sp = document.createElement("span");
        sp.innerHTML = cont;
        sp.classList.add("symb");
        sp.classList.add("symb" + count);
        /*  sect1_cont.insertBefore(hi, sect1_cont.firstChild); */
        hi.appendChild(sp);
      }
//Основной цикл создающий и эффекты
      function cicle(cont, rotat) {
        let contTextResult = String(cont());
        hi.innerHTML = "";
        let contTextResultLenght = contTextResult.length;
        for (let i = 0; i < contTextResultLenght; i++) {
          generateSpan(contTextResult[i]);
        }
        let spanH = document.querySelectorAll(".hi span");
        setTimeout(function() {
          for (let i = 0; i < contTextResultLenght; i++) {
            console.log(spanH[i]);
            rotat(spanH[i]);
            goDownEffect(spanH[i]);
          }
        }, 0);
      }

      function rotateEffect(el) {
        count++;
        if (count / 2) {
          let random = Math.floor(Math.random() * 70);
          el.style.transform = "rotate(" + random + "deg)";
        } else {
          let random = Math.floor(Math.random() * -70);
          el.style.transform = "rotate(" + random + "deg)";
        }
      }

      function goDownEffect(el) {
        let random = function(min, max) {
          var rand = min + Math.random() * (max + 1 - min);
          rand = Math.floor(rand);
          return rand;
        };

        setTimeout(function() {
          el.style.transform = "translateY(" + 1000 + "px)";
          el.style.opacity = "0";
        }, random(400, 1000));
      }
    }
  };
}
