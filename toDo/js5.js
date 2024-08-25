var girilen, secilen, tiklanan;
var eklenen;
// üzerine tıklayınca ciz iki kez tıklayınca sil

function listeyeEkle() {
  girilen = document.getElementById("input").value;

  if (girilen != "") {
    //div olustur

    let kutu = document.createElement("div");
    kutu.classList.add("box");

    //li oluştu

    eklenen = document.createElement("li");
    eklenen.innerHTML = girilen;

    //!li yi dive yerleştir

    kutu.appendChild(eklenen);

    // divi ul içine yerleştir

    document.getElementById("todolar").appendChild(kutu);

    // input alanını temizle

    document.getElementById("input").value = "";

    //bir kez tıklayınca
    eklenen.style.cursor = "pointer";

    eklenen.addEventListener("click", uzeriCiz);

    //iki kez tıklayınca
    eklenen.addEventListener("dblclick", sil);
  } else {
    alert("Boş geçmeyiniz");
  }
}

function uzeriCiz(event) {
  // secilen=event.currentTarget.parentNode;
  // secilen.style.textDecoration="line-through";
  // eklenen.style.color="red";

  secilen = event.currentTarget;
  if (secilen.classList.contains("strikethrough")) {
    secilen.classList.remove("strikethrough");
  } else {
    secilen.classList.add("strikethrough");
  }
}
function sil(event) {
  event.preventDefault();
  secilen = event.currentTarget.parentNode;

  secilen.remove();
}
