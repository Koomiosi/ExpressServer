async function henkilosto() {
            
    var x = `<table><thead><th><font size='4'>Nimi</font></th><th><font size='4'>Status</font></th></thead><tbody>`

    try {
        const response = await fetchth("https://oyyritysab.onrender.com/api/henkilosto")
    
        const henkilostodata = await response.json()
    
        await henkilostodata.map(h => {
            x += `<tr><td>${h.name}</td><td>${h.status}</td></tr>`
        })
    
        x += `</body></table>`
        document.getElementById("sisalto").innerHTML = x
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
} 

function yhteystiedot() {
       document.getElementById("sisalto").innerHTML = 
       "<font size='6'>Yhteystiedot</font> <br /><br /> asiakaspalvelu@oy_yritys_ab.com"
} 

function yritysesittely() {
    document.getElementById("sisalto").innerHTML =
    "<font size='6'>Yritysesittely</font> <br /><br /> Tähän yrityksen esittely tekstiä. "
}
function home() {
    document.getElementById("sisalto").innerHTML =
    "<font size='6'>Oy Yritys AB</font> <br /><br /> <font size='5'>Inovaation edelläkävijä</font> "
}
window.onload = home;

var btnContainer = document.getElementById("navbarColor01");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}