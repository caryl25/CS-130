/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultset = () => {
   document.querySelector("body").removeAttribute("class");
};
const desert = () => {
   document.querySelector("body").className = "desert";
};
const ocean = () => {
   document.querySelector("body").className = "ocean";
};
const highcontrast = () => {
   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener("click", defaultset);
document.querySelector("#desert").addEventListener("click", desert);
document.querySelector("#ocean").addEventListener("click", ocean);
document.querySelector("#high-contrast").addEventListener("click", highcontrast);