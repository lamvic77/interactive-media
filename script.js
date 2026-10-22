console.log("JavaScript is working!");


window.onload = function() {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning and welcome, viewer!";
  } else if (hour < 18) {
    message = "Good afternoon and welcome, viewer!";
  } else {
    message = "Good evening and welcome, viewer!";
  }

  document.getElementById("greeting").textContent = message;
};

const greeting = document.getElementById("greeting");
greeting.style.color = "whitesmoke";
greeting.style.fontSize = "40px";
greeting.style.fontFamily = "'Mea Culpa', cursive";
greeting.style.textAlign = "center";
greeting.style.marginTop = "120px";


