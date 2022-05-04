 //HAMBURGER MENU
 const hamburgerIcon = document.querySelector(".header__hamburger");
 //HEADER NAVIGATION 
 const headerNav = document.querySelector("#header__nav");

 const navBG = document.querySelector("#nav__background");

//  const heroImage = document.querySelector();
 //hamburger menu click show nav
 hamburgerIcon.addEventListener("click", e => {
    
    hamburgerIcon.classList.toggle("active");
    hamburgerIcon.classList.toggle("not-active");
    if(headerNav.classList.contains("show")) {
        headerNav.classList.remove("show");
        headerNav.classList.add("fade-out");   
    } else {       
        headerNav.classList.remove("fade-out");
        headerNav.classList.add("show"); 
        navBG.classList.add("fade-in");  
    }
   
    document.body.classList.toggle("open-nav");
    if(!hamburgerIcon.classList.contains("active") && !headerNav.classList.contains("show")) {
        navBG.classList.remove("show");
        navBG.classList.remove("fade-in");
        navBG.classList.add("fade-out");
    } else {
        navBG.classList.remove("fade-out");
        navBG.classList.add("fade-in");
        navBG.classList.add("show");
    }
 });

 window.addEventListener("resize", () => {
    if(window.innerWidth > 991.99) {
        hamburgerIcon.classList.remove("active");
        headerNav.classList.remove("show");
        headerNav.classList.remove("fade-out");
        headerNav.classList.remove("fade-in");
        navBG.classList.remove("show");
        navBG.classList.remove("fade-in");
        navBG.classList.remove("fade-out");
        document.body.classList.remove("open-nav");
    }
 });

