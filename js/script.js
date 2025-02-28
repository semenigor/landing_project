document.addEventListener("DOMContentLoaded", function () {
    console.log("Сайт завантажено та готовий до роботи!");

    // Функція для плавного скролу до секцій
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            } else {
                console.error("Секція не знайдена:", targetId);
            }
        });
    });

    // Функція для обробки кліків на зображення в галереї
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function () {
            console.log("Клік на зображення:", this.src);
        });
    });

    // Додаємо плаваючу кнопку нагору
    const scrollTopButton = document.createElement("button");
    scrollTopButton.innerHTML = "⬆";
    scrollTopButton.id = "scrollTopBtn";
    document.body.appendChild(scrollTopButton);

    // Відображення кнопки при прокрутці вниз
    window.addEventListener("scroll", function () {
        const scrollTopButton = document.getElementById("scrollTopBtn");
        if (!scrollTopButton) return;

        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block"; // Показуємо кнопку
        } else {
            scrollTopButton.style.display = "none"; // Ховаємо кнопку
        }
    });

    // Обробник натискання на кнопку "Нагору"
    scrollTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Функція для відкриття/закриття бургер-меню
    function toggleMenu() {
        const navContainer = document.querySelector(".nav-container");
        if (navContainer) {
            if (navContainer.classList.contains("active")) {
                navContainer.classList.remove("active");
            } else {
                navContainer.classList.add("active");
            }
        }
    }

    // Закриття меню при кліку на посилання на малих екранах
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            const navContainer = document.querySelector(".nav-container");
            if (navContainer && window.innerWidth < 768) {
                navContainer.style.display = "none";
            }
        });
    });

    // Отримуємо всі кнопки "Подати заявку" і додаємо обробник події
    document.querySelectorAll(".apply-btn").forEach(button => {
        button.addEventListener("click", function () {
            openModal();
        });
    });

    // Функція відкриття модального вікна
    function openModal() {
        const modal = document.getElementById("applicationModal");
        if (modal && modal.style.display !== "flex") {
            modal.style.display = "flex";
        }
    }

// Функція закриття модального вікна
function closeModal() {
    const modal = document.getElementById("applicationModal");
    if (modal) {
        modal.style.display = "none"; // Приховуємо модальне вікно
        clearForm(); // Очищуємо форму
    } else {
        console.error("Модальне вікно не знайдено!");
    }
}

// Додаємо обробник події для кнопки закриття
document.querySelector(".close").addEventListener("click", function () {
    closeModal();
});

// Закриття модального вікна при кліку поза ним
window.addEventListener("click", function (event) {
    const modal = document.getElementById("applicationModal");
    if (modal && event.target === modal) {
        closeModal();
    }
});

    // Функція очищення форми
    function clearForm() {
        const form = document.getElementById("applicationForm");
        if (form) {
            form.reset();
        }
    }


    // Обробка відправки форми
    const form = document.getElementById("applicationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Запобігаємо перезавантаженню сторінки

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !phone || !message) {
                alert("Будь ласка, заповніть всі поля форми.");
                return;
            }

            // Формуємо mailto-посилання
            const mailtoLink = "mailto:post_A7075@post.mil.gov.ua"
                + "?subject=Заявка на вакансію"
                + "&body=Ім'я: " + encodeURIComponent(name)
                + "%0D%0AEmail: " + encodeURIComponent(email)
                + "%0D%0AТелефон: " + encodeURIComponent(phone)
                + "%0D%0AПовідомлення: " + encodeURIComponent(message);

            // Відкриваємо email-клієнт
            window.location.href = mailtoLink;

            // Очищуємо форму після відправки
            clearForm();

            // Закриваємо модальне вікно
            closeModal();
        });
    }
});
