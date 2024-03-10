const words = "m";
const ANIMATION_DURATION = 4000;
const characters = words.split("").forEach((char,i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = '${i* (ANIMATION_DURATION / 16)-offset}';
        return div;
    }
    document.getElementById("spiral").append(createElement(0));
});