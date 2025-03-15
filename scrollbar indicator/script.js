
const scrollIndicator = document.getElementById("scrollindicator");

const totalscrollHeight = document.body.scrollHeight - window.innerHeight;

function updatescrollIndicator(){
    const scrollPercentage = (window.scrollY/totalscrollHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + "%"
}

window.addEventListener("scroll",updatescrollIndicator);

updatescrollIndicator();