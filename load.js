testkageListe = localStorage.getItem("list")
if(testkageListe != null) {
    kageListe = testkageListe.split(",")
} else {
    kageListe = ["Elias_0", "David_0", "Malthe_0", "Simon_0", "Anton_0"]
}
kager = {}
appendDom = document.getElementById("list")
kageListe.forEach(item => {
    console.log(item);
    d = document.createElement('div');
    d.setAttribute("class", "draggable");
    d.innerHTML = item.split("_")[0] + " Kage: " + item.split("_")[1];
    kager[item.split("_")[0]] = item.split("_")[1];
    appendDom.appendChild(d);
});

function updateLocalStorgae() {
    arr = [
    ]
    for(var child = appendDom.firstChild; child!==null; child=child.nextSibling) {
        if(child.innerHTML != "" && child.innerHTML != undefined) {
            tIn = child.innerHTML.split(" Kage: ")
            arr.push(tIn[0] + "_" + tIn[1])
            console.log(arr)
        }
    }
    localStorage.setItem("list", arr); 
}
function addCake() {
    tIn=appendDom.firstChild.nextSibling.innerHTML; 
    tInN = parseInt(tIn.split(" Kage: ")[1]) + 1;
    console.log(appendDom.firstChild.nextSibling.innerHTML = tIn.split(" Kage: ")[0] + " Kage: " + tInN)
    updateLocalStorgae()
}
function subCake() {
    tIn=appendDom.firstChild.nextSibling.innerHTML; 
    tInN = parseInt(tIn.split(" Kage: ")[1]) - 1;
    console.log(appendDom.firstChild.nextSibling.innerHTML = tIn.split(" Kage: ")[0] + " Kage: " + tInN)
    updateLocalStorgae()
}