const switcher = document.querySelector(".switcher");
const styleMain = document.head.getElementsByTagName('link');

switcher.addEventListener('change', () => {
    if(switcher.checked) {
        styleMain[1].href = "./css/light.css"
    } else {
        styleMain[1].href = "./css/dark.css"
    }
}); // Preciso aplicar href="../css/light/dark.css" para as outras páginas do mesmo documento armazenando o estado do checkbox em cachê
