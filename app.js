alert(navigator.userAgent)
userAgent = navigator.userAgent
if(userAgent.includes("Android"))
    document.getElementById("Main-H1").innerText = "Android"
else
    document.getElementById("Main-H1").innerText = "Web APP"