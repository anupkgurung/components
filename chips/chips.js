
let chipContainer = document.querySelector("#chip-container");
//let chipFo = document.querySelector("#chip-container");
let removeChip = document.querySelector(".icon-remove-sm");
function addChip(e){
    e.preventDefault();
    let inputValue = document.querySelector(".input").value;
    const chip = `<div class='chip-item'>${inputValue}<span class='material-icons icon-remove-sm'>cancel</span></div>`;
    chipContainer.innerHTML += chip;
    document.querySelector(".input").value="";
}
document.addEventListener("submit",addChip);

chipContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("icon-remove-sm")){
        e.target.parentElement.remove();
    }
});
