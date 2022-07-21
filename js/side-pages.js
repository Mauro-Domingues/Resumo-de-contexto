const switcher = document.querySelector(".switcher");
const style = document.head.getElementsByTagName('link');

switcher.addEventListener('change', () => {
    if(switcher.checked) {
        style.href = "../css/dark.css"; 
    } else {
        style.href = "../css/light.css";
    }
});

// Em construção