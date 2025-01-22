const userAgent = navigator.userAgent;

if (/android/i.test(userAgent)) {
  document.getElementById("Main-H1").innerText = "Android Device";
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  document.getElementById("Main-H1").innerText = "iOS Device";
} else if (/Mobile|Tablet/.test(userAgent)) {
  document.getElementById("Main-H1").innerText = "Other Mobile Device";
} else {
  document.getElementById("Main-H1").innerText = "Laptop/Desktop";
}
