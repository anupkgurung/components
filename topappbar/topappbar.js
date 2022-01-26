document.addEventListener("scroll",function(){
    let scrollTop =document.documentElement.scrollTop;
    let navBar= document.querySelector(".nav-fix");
    if(scrollTop > 1 ){
        navBar.classList.add("nav-collapsed");
        document.querySelector("p").style.display ="none";
    } else {
        navBar.classList.remove("nav-collapsed");
        document.querySelector("p").style.display ="";
    }
});