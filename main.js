const textContainer = document.getElementById('textContainer');
const imageContainer1 = document.getElementById('imageContainer1');
const imageContainer2 = document.getElementById('imageContainer2');
const closeBtn = document.getElementById('closeBtn');
const banner = document.getElementById('banner');

const contentSets = [
    {
        text: ["BEST SELLER", "NEW STYLE"],
        image: "imageContainer1"
    },
    {
        text: ["SUPER SELLER", "NEW ARRIVAL"],
        image: "imageContainer2"
    }
];
let currentSetIndex = 0;

function updateContent() {
    const [title, subtitle] = contentSets[currentSetIndex].text;
    textContainer.innerHTML = `
            <span class="text-line title-text">${title}</span>
            <span class="text-line second-text">${subtitle}</span>
        `;

    if (contentSets[currentSetIndex].image === "imageContainer1") {
        imageContainer1.style.opacity = "1";
        imageContainer2.style.opacity = "0";
    } else {
        imageContainer1.style.opacity = "0";
        imageContainer2.style.opacity = "1";
    }

    currentSetIndex = (currentSetIndex + 1) % contentSets.length;
}

function animateElements() {
    textContainer.classList.add('text-disappear');
    imageContainer1.classList.add('image-disappear');
    imageContainer2.classList.add('image-disappear');

    setTimeout(() => {
        updateContent();
        textContainer.classList.remove('text-disappear');
        imageContainer1.classList.remove('image-disappear');
        imageContainer2.classList.remove('image-disappear');
    }, 1000);
}

// Анімація закриття CatFish
closeBtn.addEventListener('click', function() {
    banner.classList.add('slide-down');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 500);
});

setInterval(animateElements, 5000);