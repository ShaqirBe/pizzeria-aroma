document.addEventListener("DOMContentLoaded", function () {
    const notice = document.getElementById("cookie-notice");
    const button = document.getElementById("cookie-accept");
  
    if (localStorage.getItem("cookieAccepted")) {
      notice.style.display = "none";
      return;
    }
  
    button.addEventListener("click", function () {
      localStorage.setItem("cookieAccepted", "true");
      notice.style.display = "none";
    });
  });