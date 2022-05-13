const makeBigger = () => {
   alert('make bigger!');
   document.querySelector("h1").style.fontSize = "150%";
   document.querySelector("div.content").style.fontSize = "150%";
};


const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector("h1").style.fontSize = "75%";
   document.querySelector("div.content").style.fontSize = "75%";
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);
