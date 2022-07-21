const switcher = document.querySelector(".switcher");
const style = document.querySelectorAll(".style");
const styleMain = document.querySelector(".style-main")

if(switcher.is(":checked")) {
    style.href = "../css/dark.css";
    styleMain.href = "./css/dark.css"
    console.log("checked")
} else {
    style.href = "./css/light.css";
    styleMain.href = "./css/light.css"
    console.log("not checked")
}