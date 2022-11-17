/*clock*/
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}                                                                                                 
    
document.querySelector("#redirect")
.addEventListener("click", () => {
  window.location.href = "https://www.w3schools.com";
});
