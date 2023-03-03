let header = document.getElementById("header");
      let ms = document.getElementById("models");
      let m3 = document.getElementById("model3");
      let mx = document.getElementById("modelx");
      let my = document.getElementById("modely");
      let model = document.getElementById("model");
      let val1 = document.getElementById("val1");
      let val2 = document.getElementById("val2");
      let val3 = document.getElementById("val3");


      ms.onclick = function(){
        header.style.backgroundImage = "url(img/image-1.png)";
        val1.innerHTML = "1.9s";
        val2.innerHTML = "200 mph";
        val3.innerHTML = "396 mi";
        model.innerHTML = "Model S";
      }

      m3.onclick = function(){
        header.style.backgroundImage = "url(img/image-2.png)";
        val1.innerHTML = "3.1s";
        val2.innerHTML = "162 mph";
        val3.innerHTML = "358 mi";
        model.innerHTML = "Model 3";
      }

      mx.onclick = function(){
        header.style.backgroundImage = "url(img/image-3.png)";
        val1.innerHTML = "2.5s";
        val2.innerHTML = "163 mph";
        val3.innerHTML = "333 mi";
        model.innerHTML = "Model X";
      }

      my.onclick = function(){
        header.style.backgroundImage = "url(img/image-4.png)";
        val1.innerHTML = "3.5s";
        val2.innerHTML = "155 mph";
        val3.innerHTML = "330 mi";
        model.innerHTML = "Model Y";
      }