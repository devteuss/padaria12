window.onload = () => {
  document.getElementById("loader").style.display = "none";

  const hour = new Date().getHours();
  const status = document.getElementById("status");

  if(hour >= 5 && hour < 22){
    status.innerText = "Aberto agora";
    status.style.color = "#2ecc71";
  } else {
    status.innerText = "Fechado no momento";
    status.style.color = "#e74c3c";
  }
};
