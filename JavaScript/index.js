var drawercountryBtn = document.getElementById("drawercountryBtn");
if (drawercountryBtn) {
  drawercountryBtn.addEventListener("click", function (e) {
    window.location.href = "./country.html";
  });
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);
for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

var chooseCountryBtn = document.getElementById("search-country");
if (chooseCountryBtn) {
  chooseCountryBtn.addEventListener("click", function () {
    var drawerOverlay = document.getElementById("searchByCountryWrapper");
    if (!drawerOverlay) return;
    var drawerOverlayStyle = drawerOverlay.style;
    if (drawerOverlayStyle) {
      drawerOverlayStyle.display = "flex";
      drawerOverlayStyle.zIndex = 99;
      drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      drawerOverlayStyle.alignItems = "center";
      drawerOverlayStyle.justifyContent = "flex-end";
    }
    drawerOverlay.setAttribute("closable", "");

    var onClick =
      drawerOverlay.onClick ||
      function (e) {
        if (
          e.target === drawerOverlay &&
          drawerOverlay.hasAttribute("closable")
        ) {
          drawerOverlayStyle.display = "none";
        }
      };
    drawerOverlay.addEventListener("click", onClick);
  });
}



//search year script

var draweryearBtn = document.getElementById("draweryearBtn");
if (draweryearBtn) {
  draweryearBtn.addEventListener("click", function (e) {
    window.location.href = "./by-year.html";
  });
}
var scrollElements = document.querySelectorAll("[data-animate-on-scroll]");
var observers = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observers.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);
for (let i = 0; i < scrollElements.length; i++) {
  observer.observe(scrollElements[i]);
}

var chooseYearBtn = document.getElementById("search-year");
if (chooseYearBtn) {
  chooseYearBtn.addEventListener("click", function () {
    var drawerOverlay = document.getElementById("searchByYearWrapper");
    if (!drawerOverlay) return;
    var drawerOverlayStyle = drawerOverlay.style;
    if (drawerOverlayStyle) {
      drawerOverlayStyle.display = "flex";
      drawerOverlayStyle.zIndex = 99;
      drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      drawerOverlayStyle.alignItems = "center";
      drawerOverlayStyle.justifyContent = "flex-end";
    }
    drawerOverlay.setAttribute("closable", "");

    var onClick =
      drawerOverlay.onClick ||
      function (e) {
        if (
          e.target === drawerOverlay &&
          drawerOverlay.hasAttribute("closable")
        ) {
          drawerOverlayStyle.display = "none";
        }
      };
    drawerOverlay.addEventListener("click", onClick);
  });
}
