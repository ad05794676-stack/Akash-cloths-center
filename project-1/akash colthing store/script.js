// =========================
// Shopping Cart
// =========================

let cart = 0;

const cartIcon = document.querySelector(".fa-cart-shopping");
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cart++;

        if (cartIcon) {
            cartIcon.setAttribute("data-count", cart);
        }

        alert("✅ Product Added To Cart");
    });
});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
        const id = this.getAttribute("href");

        if (id && id.startsWith("#")) {
            e.preventDefault();

            const section = document.querySelector(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// =========================
// Shop Button Animation
// =========================

const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("mouseenter", () => {
        shopBtn.style.transform = "scale(1.08)";
    });

    shopBtn.addEventListener("mouseleave", () => {
        shopBtn.style.transform = "scale(1)";
    });
}

// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".product-card");

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = "0.7s";
});

window.addEventListener("scroll", () => {
    cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Trigger once on page load
window.dispatchEvent(new Event("scroll"));
