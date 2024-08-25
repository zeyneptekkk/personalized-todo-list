

function uzeriCiz(event){
	var secilen=event.target;
	if (secilen.classList.contains("strikethrough")) {
		secilen.classList.remove("strikethrough");
	  } else {
		secilen.classList.add("strikethrough");
	  }

	  const li = event.currentTarget;
      if (li.classList.contains('completed')) {
        return; // Eğer zaten çiziliyse, hiçbir şey yapma
      }
      li.classList.add('completed');

      // Kronometreyi durdur
      const intervalId = li.dataset.intervalId;
      if (intervalId) {
        clearInterval(parseInt(intervalId, 10));
		
		li.appendChild(document.createTextNode(" Done"));
      }
}

function sil(li) {
		
  	li.remove();
  }
  

function showDiv(divId){
	//tüm divleri gizle
	var icerikler=document.querySelectorAll(".content");
	icerikler.forEach(function(content){
		content.style.display="none";
	})

	//tıklanınca butona ait divi göster
	document.getElementById(divId).style.display="block";
}

function e() {
	var girilen = document.getElementById("input").value;
	if (girilen != "") {
	  var eklenen = document.createElement("li");
	  eklenen.textContent = girilen;

	  // Kronometreyi gösterecek bir <span> oluştur
	  const timer = document.createElement('span');
	  timer.className = "timer";
	  timer.textContent = "0.0s"; // Başlangıç değeri

	  // Kronometreyi başlatmak için zaman damgası
	  const startTime = Date.now();
	  const interval = setInterval(() => {
		const elapsedTime = (Date.now() - startTime) / 1000;
		timer.textContent = elapsedTime.toFixed(1) +"s";
	  }, 100);

	  // Liste elemanına kronometreyi ekle
	  eklenen.appendChild(timer);

	  // Kronometre ve interval referansını li'ye ekle
	  eklenen.dataset.intervalId = interval;
	  eklenen.dataset.startTime = startTime;

	  document.querySelector("#div3").appendChild(eklenen);

	  // Giriş alanını temizle
	  document.getElementById("input").value = "";

	  // Olay işleyicilerini ekle
	  eklenen.style.cursor = "pointer";
	  eklenen.addEventListener("click", uzeriCiz);
	  eklenen.addEventListener("dblclick", function() {
		sil(eklenen);
	  });

	  console.log(girilen);
	  console.log(eklenen);
	} else {
	  alert("Do not leave blank");
	}
  }

  
function p() {
	var girilen = document.getElementById("input").value;
	if (girilen != "") {
	  var eklenen = document.createElement("li");
	  eklenen.textContent = girilen;

	  // Kronometreyi gösterecek bir <span> oluştur
	  const timer = document.createElement('span');
	  timer.className = "timer";
	  timer.textContent = "0.0s"; // Başlangıç değeri

	  // Kronometreyi başlatmak için zaman damgası
	  const startTime = Date.now();
	  const interval = setInterval(() => {
		const elapsedTime = (Date.now() - startTime) / 1000;
		timer.textContent = elapsedTime.toFixed(1) +"s";
	  }, 100);

	  // Liste elemanına kronometreyi ekle
	  eklenen.appendChild(timer);

	  // Kronometre ve interval referansını li'ye ekle
	  eklenen.dataset.intervalId = interval;
	  eklenen.dataset.startTime = startTime;

	  document.querySelector("#div1").appendChild(eklenen);

	  // Giriş alanını temizle
	  document.getElementById("input").value = "";

	  // Olay işleyicilerini ekle
	  eklenen.style.cursor = "pointer";
	  eklenen.addEventListener("click", uzeriCiz);
	  eklenen.addEventListener("dblclick", function() {
		sil(eklenen);
	  });

	  console.log(girilen);
	  console.log(eklenen);
	} else {
	  alert("Do not leave blank");
	}
  }

  
function d() {
	var girilen = document.getElementById("input").value;
	if (girilen != "") {
	  var eklenen = document.createElement("li");
	  eklenen.textContent = girilen;

	  // Kronometreyi gösterecek bir <span> oluştur
	  const timer = document.createElement('span');
	  timer.className = "timer";
	  timer.textContent = "0.0s"; // Başlangıç değeri

	  // Kronometreyi başlatmak için zaman damgası
	  const startTime = Date.now();
	  const interval = setInterval(() => {
		const elapsedTime = (Date.now() - startTime) / 1000;
		timer.textContent = elapsedTime.toFixed(1) +"s";
	  }, 100);

	  // Liste elemanına kronometreyi ekle
	  eklenen.appendChild(timer);

	  // Kronometre ve interval referansını li'ye ekle
	  eklenen.dataset.intervalId = interval;
	  eklenen.dataset.startTime = startTime;

	  document.querySelector("#div2").appendChild(eklenen);

	  // Giriş alanını temizle
	  document.getElementById("input").value = "";

	  // Olay işleyicilerini ekle
	  eklenen.style.cursor = "pointer";
	  eklenen.addEventListener("click", uzeriCiz);
	  eklenen.addEventListener("dblclick", function() {
		sil(eklenen);
	  });

	  console.log(girilen);
	  console.log(eklenen);
	} else {
	  alert("Do not leave blank");
	}
  }
