var acc = document.getElementsByClassName("collapsedPortlet");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activePortlet");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function hideElementsByClass(className) {
  document.querySelectorAll("." + className).forEach(function (element) {
    element.style.display = "none";
  });
}

function showElementsByID(IDName) {
  document.querySelectorAll("#" + IDName).forEach(function (element) {
    element.style.display = "inline";
  });
}
// Function to open a new pop-up window with a specified URL
function openPopup(url) {
  // Open a new window with the URL, a unique name for the window, and the desired features
  window.open(url, "popupWindow", "width=auto,height=auto,scrollbars=yes");
}
// Function to open a new pop-up window with a specified URL
function openPopup_MYESR(url) {
  // Open a new window with the URL, a unique name for the window, and the desired features
  window.open(url, "popupWindow", "width=auto,height=auto,scrollbars=yes");
}
