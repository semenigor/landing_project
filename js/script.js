document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт завантажено та готовий до роботи!");

    // Функція для плавного скролу до секцій
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Функція для обробки кліків на зображення в галереї
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function() {
            console.log("Клік на зображення:", this.src);
        });
    });

    // Додаємо плаваючу кнопку нагору
    const scrollTopButton = document.createElement("button");
    scrollTopButton.innerHTML = "⬆";
    scrollTopButton.id = "scrollTopBtn";
    document.body.appendChild(scrollTopButton);

    // Стилі для кнопки (можна винести в CSS)
    scrollTopButton.style.position = "fixed";
    scrollTopButton.style.bottom = "20px";
    scrollTopButton.style.right = "20px";
    scrollTopButton.style.width = "50px";
    scrollTopButton.style.height = "50px";
    scrollTopButton.style.background = "#fdd835";
    scrollTopButton.style.color = "#000";
    scrollTopButton.style.border = "none";
    scrollTopButton.style.borderRadius = "50%";
    scrollTopButton.style.cursor = "pointer";
    scrollTopButton.style.display = "none";
    scrollTopButton.style.fontSize = "24px";
    scrollTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";

    // Відображення кнопки при прокрутці вниз
window.addEventListener("scroll", function () {
    var scrollTopButton = document.getElementById("scrollTopBtn");
    if (!scrollTopButton) return; // Перевіряємо, чи кнопка існує

    if (window.scrollY > 300) {
        scrollTopButton.classList.remove("hidden");
    } else {
        scrollTopButton.classList.add("hidden");
    }
});

    // Обробник натискання на кнопку
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function toggleMenu() {
    var navContainer = document.querySelector(".nav-container");
    navContainer.classList.toggle("active");
}


document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        var navContainer = document.querySelector(".nav-container");
        if (window.innerWidth < 768) {
            navContainer.style.display = "none";
        }
    });
});

window.addEventListener("scroll", function () {
    var scrollTopButton = document.getElementById("scrollTopBtn");
    if (!scrollTopButton) return; // Перевіряємо, чи кнопка існує

    if (window.scrollY > 300) {
        scrollTopButton.classList.remove("hidden");
    } else {
        scrollTopButton.classList.add("hidden");
    }
});

// Отримуємо всі кнопки "Подати заявку" і додаємо обробник події
document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", function () {
        openModal();
    });
});

// Функція відкриття модального вікна
function openModal() {
    var modal = document.getElementById("applicationModal");
    if (modal) {
        modal.style.display = "flex";
    } else {
        console.error("Модальне вікно не знайдено!");
    }
}

// Функція закриття модального вікна
function closeModal() {
    var modal = document.getElementById("applicationModal");
    if (modal) {
        modal.style.display = "none";
        clearForm(); // Очищуємо форму при закритті
    }
}

// Закриття при кліку поза вікном
window.addEventListener("click", function(event) {
    var modal = document.getElementById("applicationModal");
    if (event.target === modal) {
        closeModal();
    }
});

// Функція очищення форми
function clearForm() {
    var form = document.getElementById("applicationForm");
    if (form) {
        form.reset();
    }
}

// Обробка відправки форми
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Формуємо mailto-посилання
    var mailtoLink = "mailto:post_A7075@post.mil.gov.ua"
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
