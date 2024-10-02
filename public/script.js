async function henkilosto() {
            
    var x = `<table><thead><th>Nimi</th><th>Asema</th></thead><tbody>`

    try {
        const response = await fetch("http://localhost:3000/api/henkilosto")
    
        const henkilostodata = await response.json()
    
        await henkilostodata.map(h => {
            x += `<tr><td>${h.name}</td><td>${h.id}</td></tr>`
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
       "Yhteystiedot";    
} 

function yritysesittely() {
    document.getElementById("sisalto").innerHTML =
    "Yritysesittely"
}
function home() {
    document.getElementById("sisalto").innerHTML =
    "Oy yritys AB "
}

