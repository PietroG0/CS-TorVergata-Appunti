document.addEventListener("DOMContentLoaded", () => {
    const counterValue = document.getElementById("counter-value");
    const incrementButton = document.getElementById("increment-button");
    const decrementButton = document.getElementById("decrement-button");
    const resetButton = document.getElementById("reset-button");
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Recupera valore iniziale
    fetch("/counter")
        .then(res => res.json())
        .then(data => {
            counterValue.textContent = data.counter;
        });

    // Aumenta
    incrementButton.addEventListener("click", () => {
        fetch("/increase", { method: "POST" })
            .then(res => res.json())
            .then(data => {
                counterValue.textContent = data.counter;
            });
    });

    // Diminuisci
    decrementButton.addEventListener("click", () => {
        fetch("/decrease", { method: "POST" })
            .then(res => res.json())
            .then(data => {
                counterValue.textContent = data.counter;
            });
    });

    // Cambia colori header/footer
    resetButton.addEventListener("click", () => {
        fetch("/headfootcolors")
            .then(res => res.json())
            .then(colors => {
                header.style.backgroundColor = colors.background;
                header.style.color = colors.text;
                footer.style.backgroundColor = colors.background;
                footer.style.color = colors.text;
            });
    });

    // Hamburger
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
