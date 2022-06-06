function playbgm() {
    const bgm = document.getElementById("bgm");
    bgm.play();
    console.log("yay");
}

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function revealShorts() {
    var shorts = document.querySelectorAll(".shortCard");
    for (var i = 0; i < shorts.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = shorts[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        shorts[i].classList.add("active");
      } else {
        shorts[i].classList.remove("active");
      }
    }
  }

  function revealFeatures() {
    var features = document.querySelectorAll(".featureCard");
    for (var i = 0; i < features.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = features[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        features[i].classList.add("active");
      } else {
        features[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealShorts);
window.addEventListener("scroll", revealFeatures);