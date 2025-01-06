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
