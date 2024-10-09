function animar() {
    const slime = document.getElementById("slime");
    slime.classList.add("animar");
    
}
function jump() {
    const slime = document.getElementById("slime");
    const currentX = slime.getBoundingClientRect().left - slime.parentElement.getBoundingClientRect().left;
    slime.style.left = `${currentX}px`;
    slime.classList.add("jump");
    slime.classList.remove("animar");
    
    setTimeout(()=>{
        slime.classList.add("animar");
        slime.classList.remove("jump");
    },1000)
    
}