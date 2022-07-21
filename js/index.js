const switcher = document.querySelector(".switcher");
//const style = document.head.getElementsByTagName('link');
const styleMain = document.head.getElementsByTagName('link');

switcher.addEventListener('change', () => {
    if(switcher.checked) {
        //style.href = "../css/dark.css"; 
        styleMain[1].href = "./css/dark.css" // indice certo é [2]
        console.log("checked")
    } else {
        //style.herf = "../css/light.css";
        styleMain[1].href = "./css/light.css"
        console.log("not checked")
    }
});