var theme = window.localStorage.getItem('theme');
var backToTopBtn = document.querySelector("#back-to-top-btn");


document.addEventListener("DOMContentLoaded",()=>{
    window.scrollTo(0,0);
    setTheme();

    
})







document.querySelectorAll(".theme-dot").forEach(element => {
    element.addEventListener("click",()=>{
        theme = element.dataset.theme;
        setTheme();
        console.log(theme);
    })
});

function setTheme(){
    if(theme === "null"){
        theme = "default";
    }
        if(theme === 'default'){ 
            document.querySelector("#github-logo").setAttribute("src","images/GitHub-Mark-32px.png")
        } else{
            document.querySelector("#github-logo").setAttribute("src","images/GitHub-Mark-Light-32px.png")
        }
        document.querySelector("#theme-style").setAttribute("href",`css/${theme}.css`)
        window.localStorage.setItem('theme', theme);
}

window.addEventListener("scroll",()=>{
    if(window.scrollY > 0){
        backToTopBtn.style.display = "block"
    }else{
        backToTopBtn.style.display = "none"

    }
})