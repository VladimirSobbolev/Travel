const LEFT_ITEM = document.querySelector(".slider__item");
const CENTER_ITEM = document.querySelectorAll(".slider__item")[1];
const RIGHT_ITEM = document.querySelectorAll(".slider__item")[2];
const LEFT_BUTTON = document.querySelector(".slider__button");
const RIGHT_BUTTON = document.querySelectorAll(".slider__button")[1];
const LEFT_DOT = document.querySelector(".dot");
const CENTER_DOT = document.querySelectorAll(".dot")[1];
const RIGHT_DOT = document.querySelectorAll(".dot")[2];

const transitionLeft = () => {
    LEFT_ITEM.classList.add("transition-left");
    changeDotLeft()
}

const transitionCenter = () => {
    LEFT_ITEM.classList.remove("transition-left");
    RIGHT_ITEM.classList.remove("transition-right");
    changeDotCenter()
}

const transitionRight = () => {
    RIGHT_ITEM.classList.add("transition-right");
    changeDotRight()
}

const transitionButtonLeft = () => {
    if (RIGHT_ITEM.classList.contains("transition-right")) {
        RIGHT_BUTTON.classList.remove("disable-button");
        RIGHT_ITEM.classList.remove("transition-right");
        changeDotCenter()
    } else {
        LEFT_ITEM.classList.add("transition-left");
        LEFT_BUTTON.classList.add("disable-button");
        changeDotLeft()
    }
}

const transitionButtonRight = () => {
    if (LEFT_ITEM.classList.contains("transition-left")) {
        LEFT_BUTTON.classList.remove("disable-button");
        LEFT_ITEM.classList.remove("transition-left");
        changeDotCenter()
    } else {
        RIGHT_ITEM.classList.add("transition-right");
        RIGHT_BUTTON.classList.add("disable-button");
        changeDotRight()
    }
}

const changeDotLeft = () => {
    LEFT_DOT.classList.add("dot_active");
    CENTER_DOT.classList.remove("dot_active")
}

const changeDotCenter = () => {
    CENTER_DOT.classList.add("dot_active")
    LEFT_DOT.classList.remove("dot_active");
    RIGHT_DOT.classList.remove("dot_active");
}

const changeDotRight = () => {
    RIGHT_DOT.classList.add("dot_active");
    CENTER_DOT.classList.remove("dot_active")
}





LEFT_ITEM.addEventListener("click", transitionLeft);
CENTER_ITEM.addEventListener("click", transitionCenter);
RIGHT_ITEM.addEventListener("click", transitionRight);

LEFT_BUTTON.addEventListener("click", transitionButtonLeft);
RIGHT_BUTTON.addEventListener("click", transitionButtonRight);