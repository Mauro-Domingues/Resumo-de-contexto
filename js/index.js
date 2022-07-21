const switcher = document.querySelector(".switcher");
const style = document.querySelectorAll(".style");
const styleMain = document.querySelector(".style-main")

switcher.addEventListener('change', () => {
    if(switcher.checked) {
        style.src = "../css/dark.css";
        styleMain.src = "./css/dark.css"
        console.log("checked")
    } else {
        style.src = "./css/light.css";
        styleMain.src = "./css/light.css"
        console.log("not checked")
    }
});

