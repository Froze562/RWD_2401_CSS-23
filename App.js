let clr = document.querySelector("body")
let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    let red = Math.round(Math.random() * 255) ;
    let green = Math.round(Math.random() * 255) ;
    let blue = Math.round(Math.random() * 255) ;

    clr.style.background = `rgb(${red}, ${green}, ${blue})`;
});
let changeIcon = function(icon){
    icon.classList.toggle("fa-times");
}



let bar = document.querySelector(".bar")
let logo = document.querySelector(".logo")
let icon = document.querySelector(".icon")
let sidebar = document.querySelector(".sidebar")
let side_menu = document.querySelector(".side_menu")

bar.addEventListener("click", () => {
    logo.classList.toggle("icon");
    sidebar.classList.toggle("side_menu");
})



let parent = document.querySelector("#parent")
let child = document.querySelector(".child")
let row_parent = document.querySelector("#row_parent")

window.addEventListener("scroll", ()=>{

    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;
    let subHeight = height - clientHeight;
    let result = Math.round(fromTop * 100 / subHeight);

    parent.style.background = `conic-gradient(blue ${result}%, rgba(34, 47, 62, 0.6) ${result}%)`;
    row_parent.style.background = `linear-gradient(90deg, orange ${result}%, rgba(34, 47, 62, 0.6) ${result}%)`;
    child.innerHTML = result;

})