/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.onclick = () => {
        navMenu.classList.add("show__menu");
    };
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.onclick = () => {
        navMenu.classList.remove("show__menu");
    };
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

linkAction = () => {
    navMenu.classList.remove("show__menu");
};

navLink.forEach(
    (n) =>
        (n.onclick = () => {
            linkAction();
        })
);

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll("[data-target]"),
//     tabContents = document.querySelectorAll("[data-content]");

// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         const target = document.querySelector(tab.dataset.target);
//         tabContents.forEach((tabContent) => {
//             tabContent.classList.remove("qualification__active");
//         });
//         target.classList.add("qualification__active");
//         tabs.forEach((tab) => {
//             tab.classList.remove("qualification__active");
//         });
//         tab.classList.add("qualification__active");
//     });
// });

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = (modalClick) => {
    modalViews[modalClick].classList.add("modal__active");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.onclick = () => {
        modal(i);
    };
});

modalCloses.forEach((modalClose) => {
    modalClose.onclick = () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("modal__active");
        });
    };
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 4,
        clickable: true,
    },
    mousewheel: true,
    keyboard: false,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});

/*==================== CONTACT ====================*/
const contactName = document.querySelector("#contact__name"),
    contactEmail = document.querySelector("#contact__email"),
    contactSubject = document.querySelector("#contact__subject"),
    contactMessage = document.querySelector("#contact__message"),
    successAlert = document.querySelector(".success__alert"),
    warningAlert = document.querySelector(".warning__alert"),
    successMsg = document.querySelector(".success__msg"),
    warningMsg = document.querySelector(".warning__msg"),
    successAlertClose = document.querySelector(".success__alert-close-btn"),
    warningAlertClose = document.querySelector(".warning__alert-close-btn");
var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validate_form() {
    if (contactName.value == "") {
        warningMsg.innerHTML = "Enter a name!";
        warningAlert.classList.remove("hide");
        warningAlert.classList.add("show");
        warningAlert.classList.add("showAlert");
        setTimeout(function () {
            warningAlert.classList.remove("show");
            warningAlert.classList.add("hide");
        }, 3000);
    } else if (!contactEmail.value.match(emailPattern)) {
        warningMsg.innerHTML = "Enter a valid email!";
        warningAlert.classList.remove("hide");
        warningAlert.classList.add("show");
        warningAlert.classList.add("showAlert");
        setTimeout(function () {
            warningAlert.classList.remove("show");
            warningAlert.classList.add("hide");
        }, 3000);
    } else if (contactSubject.value == "") {
        warningMsg.innerHTML = "Enter a subject!";
        warningAlert.classList.remove("hide");
        warningAlert.classList.add("show");
        warningAlert.classList.add("showAlert");
        setTimeout(function () {
            warningAlert.classList.remove("show");
            warningAlert.classList.add("hide");
        }, 3000);
    } else if (contactMessage.value == "") {
        warningMsg.innerHTML = "Enter a message!";
        warningAlert.classList.remove("hide");
        warningAlert.classList.add("show");
        warningAlert.classList.add("showAlert");
        setTimeout(function () {
            warningAlert.classList.remove("show");
            warningAlert.classList.add("hide");
        }, 3000);
    } else {
        sendMeEmail();
    }
}

function sendMeEmail() {
    var tParams = {
        from_name: contactName.value,
        from_email: contactEmail.value,
        subject: contactSubject.value,
        message: contactMessage.value,
    };
    emailjs.send("service_1eg0wt3", "template_tjomg0d", tParams).then(
        function (response) {
            successMsg.innerHTML = "Message Sent!";
            successAlert.classList.remove("hide");
            successAlert.classList.add("show");
            successAlert.classList.add("showAlert");
            setTimeout(function () {
                successAlert.classList.remove("show");
                successAlert.classList.add("hide");
            }, 3000);
            contactName.value = "";
            contactEmail.value = "";
            contactSubject.value = "";
            contactMessage.value = "";
        },
        function (error) {
            warningMsg.innerHTML = "Failed. Retry!";
            warningAlert.classList.remove("hide");
            warningAlert.classList.add("show");
            warningAlert.classList.add("showAlert");
            setTimeout(function () {
                warningAlert.classList.remove("show");
                warningAlert.classList.add("hide");
            }, 3000);
        }
    );
}

warningAlertClose.onclick = () => {
    warningAlert.classList.remove("show");
    warningAlert.classList.add("hide");
};

successAlertClose.onclick = () => {
    successAlert.classList.remove("show");
    successAlert.classList.add("hide");
};

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
