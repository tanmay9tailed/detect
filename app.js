const userAgent = navigator.userAgent;
if (/Windows/.test(userAgent)) {
  document.getElementById("Main-H1").innerText = "Laptop/Desktop";
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  document.getElementById("Main-H1").innerText = "iOS Device";
} else if (/Mobile|Tablet/.test(userAgent)) {
  document.getElementById("Main-H1").innerText = "Other Mobile Device";
} else {
  document.getElementById("Main-H1").innerText = "Android";
}
document.getElementById("para").innerText = userAgent