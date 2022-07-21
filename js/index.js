const switcher = document.querySelector(".switcher");
const styleMain = document.head.getElementsByTagName('link');
const styleSide = document.head.getElementsByTagName('link');

switcher.addEventListener('change', () => {
    if(switcher.checked) {
        styleMain[1].href = "./css/light.css"
        styleSide[3].href = "../css/light.css"

    } else {
        styleMain[1].href = "./css/dark.css"
        styleSide[3].href = "../css/dark.css"
    }
});