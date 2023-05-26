// Intro Sliding Animation
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// NavBar Color Transition Animation
const header = document.querySelector(".navbar-main");
const sectionOne = document.querySelector(".hero-image");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("changeColor");
    } else {
      header.classList.remove("changeColor");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Learn More Button
const faders3 = document.querySelectorAll(".learn-more");
const appearOptions3 = {
  threshold: 1,
  rootMargin: "0px 0px -20px 0px",
};

const appearOnScroll3 = new IntersectionObserver(function (
  entries,
  appearOnScroll3
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll3.unobserve(entry.target);
    }
  });
},
appearOptions3);

faders3.forEach((fader) => {
  appearOnScroll3.observe(fader);
});
// About Area Text Animation

const faders = document.querySelectorAll(".what-is-MOAA");
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const faders2 = document.querySelectorAll(".explanation");
const appearOptions2 = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll2 = new IntersectionObserver(function (
  entries,
  appearOnScroll2
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll2.unobserve(entry.target);
    }
  });
},
appearOptions2);

faders2.forEach((fader) => {
  appearOnScroll2.observe(fader);
});

// Collapsible About Area
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}