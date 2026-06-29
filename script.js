
const publicKey = "YOUR_PUBLIC_KEY";
const serviceID = "YOUR_SERVICE_ID";
const templateID = "YOUR_TEMPLATE_ID";

(function(){
    emailjs.init(publicKey);
})();

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

const cards = document.querySelectorAll(".card");

function showCards() {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", showCards);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.5s";
});

function toggleMode() {
    document.body.classList.toggle("light");
}

function sendMessage() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs⚠️");
        return;
    }

    if (!email.includes("@")) {
        alert(" L'adresse email est incorrecte❌");
        return;
    }

    emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(() => {
        alert("Le message a été envoyé avec succés✅");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(() => {
        alert("Erreur❌");
    });
}

function openProject1() {
    window.location.href = "index1.html";
}
function openProject2() {
    window.location.href = "index2.html";
}

document.querySelectorAll("#projects button").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});