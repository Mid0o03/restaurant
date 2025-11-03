// Fichier JS : script.js

document.addEventListener("DOMContentLoaded", () => {
  // Données simulées des plats
  const plats = [
    { nom: "Bruschetta", type: "entree" },
    { nom: "Pizza Margherita", type: "plat" },
    { nom: "Lasagnes", type: "plat" },
    { nom: "Tiramisu", type: "dessert" },
    { nom: "Panna Cotta", type: "dessert" },
    { nom: "Chianti", type: "boisson" },
    { nom: "Limoncello", type: "boisson" },
  ];

  const container = document.querySelector(".plats");
  const boutons = document.querySelectorAll(".filtres button");

  // Affichage initial
  afficherPlats("tous");

  // Filtrage
  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filtre = btn.dataset.filtre;
      afficherPlats(filtre);
    });
  });

  function afficherPlats(filtre) {
    container.innerHTML = "";
    plats
      .filter((plat) => filtre === "tous" || plat.type === filtre)
      .forEach((plat) => {
        const div = document.createElement("div");
        div.className = "plat";
        div.innerText = plat.nom;
        container.appendChild(div);
      });
  }

  // Validation des formulaires (exemple simple)
  const formReservation = document.getElementById("form-reservation");
  const formContact = document.getElementById("form-contact");

  [formReservation, formContact].forEach((form) => {
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Merci ! Votre formulaire a bien été envoyé.");
        form.reset();
      });
    }
  });

  // Animation au scroll (fade-in)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});
