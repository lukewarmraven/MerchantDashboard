function merchTypeOptions(){
    var merchType = document.querySelector('input[name="merchType"]:checked').value;
    var changeDiv = document.getElementById("changeByOption");

    changeDiv.innerHTML = "";
    if (merchType == "album"){
        changeDiv.innerHTML = `
        <div class="div-album">
            <label for="albumVersion">Album Version: </label>
            <input type="text" name="albumVersion" id="albumVersion" placeholder="Enter album version...">
        </div>
        `;
    } else if(merchType == "photocard") {
        changeDiv.innerHTML = `
        <div class="div-pc">
            <label for="pcMember">Member name: </label>
            <input type="text" name="pcMember" id="pcMember" placeholder="Enter member name...">

            <label for="pcVersion">Photocard Version: </label>
            <input type="text" name="pcVersion" id="pcVersion" placeholder="Enter pc version...">

            <label for="source">Source: </label>
            <input type="text" name="source" id="source" placeholder="Enter source...">
        </div>
        `;
    } else if(merchType == "lightstick") {
        changeDiv.innerHTML = `
        <div class="div-lightstick">
            <label for="lightstickVersion">Lightstick Version: </label>
            <input type="text" name="lightstickVersion" id="lightstickVersion" placeholder="Enter lightstick version...">
        </div>
        `;
    }
}

// makes sure that the function is executed instead of using onclick in the html
document.addEventListener("DOMContentLoaded",merchTypeOptions);
document.addEventListener("change",merchTypeOptions);