const currencyButton = document.getElementById('currencyButton');
const currencyDropdown = document.getElementById('currencyDropdown');
const languageButton = document.getElementById('languageButton');
const languageDropdown = document.getElementById('languageDropdown');

currencyButton.addEventListener('click', () => {
    currencyDropdown.classList.toggle('hidden');
    languageDropdown.classList.add('hidden');
});

languageButton.addEventListener('click', () => {
    languageDropdown.classList.toggle('hidden');
    currencyDropdown.classList.add('hidden');
});

document.addEventListener('click', (e) => {
    if (!currencyButton.contains(e.target) && !currencyDropdown.contains(e.target)) {
        currencyDropdown.classList.add('hidden');
    }
    if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.add('hidden');
    }
});


$('.4slide').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
});

$('.3slide').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
    ]
});

$('.1slide').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    // prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
});

function showMoreImages() {
    const container = document.getElementById("more-images");

    if (container.classList.contains("hide")) {
        for (let i = 0; i < 58; i++) {
            const img = document.createElement("img");
            img.src = "assets/images/1-2-150x150.jpg";
            img.alt = `HS1 - ${i + 1}`;
            img.className = "h-7 w-7";
            container.appendChild(img);
        }
        container.classList.remove("hide");
    } else {
        container.classList.add("hide");
        container.innerHTML = "";
    }
}

function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".icon");

    if (answer.style.height === "0px" || !answer.style.height) {
        document.querySelectorAll(".faq-answer").forEach((item) => {
            item.style.height = "0px";
        });
        document.querySelectorAll(".icon").forEach((icon) => {
            icon.textContent = "+";
        });

        answer.style.height = answer.scrollHeight + "px";
        icon.textContent = "-";
    } else {
        answer.style.height = "0px";
        icon.textContent = "+";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');
    const toggleButton = document.getElementById('toggle-faq');
    const faqItems = faqContainer.children;
    const initialVisibleCount = 5;

    Array.from(faqItems).forEach((item, index) => {
        if (index >= initialVisibleCount) {
            item.style.display = 'none';
        }
    });

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.textContent === 'Less';
        Array.from(faqItems).forEach((item, index) => {
            if (index >= initialVisibleCount) {
                item.style.display = isExpanded ? 'none' : 'block';
            }
        });
        toggleButton.textContent = isExpanded ? 'More' : 'Less';
    });
});
