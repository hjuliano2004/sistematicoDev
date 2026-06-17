let topBtn = document.getElementById("to-top");

let startTop = null;

window.addEventListener("scroll", ()=>{

    topBtn.classList.add("show");

    
    clearTimeout(startTop);
    startTop = setTimeout(()=>{
    topBtn.classList.remove("show");
}, 3000);

})