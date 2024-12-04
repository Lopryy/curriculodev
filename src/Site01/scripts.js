function setActive(id){
    console.log(id);
    const menu = document.getElementById(id);
    menu.classList.add("menuActive");
}
function setDesative(id){
    console.log(id);
    const menu = document.getElementById(id);
    menu.classList.remove("menuActive");
}