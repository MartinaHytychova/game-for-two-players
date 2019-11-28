let body;
let bodyVKole;
let aktivniHrac;
let kostka;
let koncoveBody;
let hraProbiha;

init();

document.querySelector(".tlacitko-hod").addEventListener("click", function() {
  if (hraProbiha) {
    // 1. Náhodné číslo
    kostka = Math.floor(Math.random() * 6) + 1;

    // 2. Zobrazit výsledek
    let kostkaDOM = document.querySelector(".kostka");
    kostkaDOM.style.display = "block";
    kostkaDOM.textContent = kostka;

    // 3. Aktualizovat body kola pokud padla/nepadla 1
    if (kostka !== 1) {
      // Přidat body
      bodyVKole += kostka;
      document.querySelector(
        "#soucasne-" + aktivniHrac
      ).textContent = bodyVKole;
    } else {
      dalsiHrac();
    }
  }
});

document.querySelector(".tlacitko-dost").addEventListener("click", function() {
  if (hraProbiha) {
    // Přidat současné body k celkovým bodům hráče
    body[aktivniHrac] += bodyVKole;

    // Aktualizovat UI
    document.querySelector("#body-" + aktivniHrac).textContent =
      body[aktivniHrac];

    // Zkontrolovat zda hráč již vyhrál
    if (body[aktivniHrac] >= koncoveBody) {
      document.querySelector("#jmeno-" + aktivniHrac).textContent = "Vítěz!";
      document
        .querySelector(".hrac-" + aktivniHrac + "-panel")
        .classList.remove("aktivni");
      document
        .querySelector(".hrac-" + aktivniHrac + "-panel")
        .classList.add("vitez");
      document.querySelector(".kostka").style.display = "none";
      hraProbiha = false;
    } else {
      // Přepnout hráče
      dalsiHrac();
    }
  }
});

function dalsiHrac() {
  aktivniHrac === 0 ? (aktivniHrac = 1) : (aktivniHrac = 0);
  bodyVKole = 0;

  document.getElementById("soucasne-0").textContent = "0";
  document.getElementById("soucasne-1").textContent = "0";

  document.querySelector(".hrac-0-panel").classList.toggle("aktivni");
  document.querySelector(".hrac-1-panel").classList.toggle("aktivni");
}
document.querySelector(".tlacitko-novy").addEventListener("click", init);

function init() {
  body = [0, 0];
  aktivniHrac = 0;
  bodyVKole = 0;
  koncoveBody = 25;
  hraProbiha = true;

  document.querySelector(".kostka").style.display = "none";

  document.getElementById("body-0").textContent = "0";
  document.getElementById("body-1").textContent = "0";
  document.getElementById("soucasne-0").textContent = "0";
  document.getElementById("soucasne-1").textContent = "0";

  document.querySelector("#jmeno-0").textContent = "Hráč 1";
  document.querySelector("#jmeno-1").textContent = "Hráč 2";

  document.querySelector(".hrac-0-panel").classList.remove("aktivni");
  document.querySelector(".hrac-1-panel").classList.remove("aktivni");
  document.querySelector(".hrac-1-panel").classList.remove("vitez");
  document.querySelector(".hrac-0-panel").classList.remove("vitez");
  document.querySelector(".hrac-1-panel").classList.add("aktivni");
}
