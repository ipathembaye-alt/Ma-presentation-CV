document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const sections = document.querySelectorAll(".container section");
  const ul = document.createElement("ul");
  sections.forEach(s => {
    const h2 = s.querySelector("h2");
    if (h2) ul.innerHTML += `<li><a href="#${s.id}">${h2.textContent}</a></li>`;
  });
  menu.appendChild(ul);
  const liens = menu.querySelectorAll("a");
  liens.forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById(a.getAttribute("href").slice(1)).scrollIntoView({ behavior: "smooth" });
  }));
  const setActif = () => sections.forEach(s => {
    const pos = window.scrollY + 120;
    if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
      liens.forEach(l => l.classList.remove("actif"));
      menu.querySelector(`a[href="#${s.id}"]`).classList.add("actif");
    }
  });
  window.addEventListener("scroll", setActif); setActif();
  const btnTop = document.getElementById("btnTop");
  window.addEventListener("scroll", () => btnTop.classList.toggle("visible", window.scrollY > 300));
  btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});