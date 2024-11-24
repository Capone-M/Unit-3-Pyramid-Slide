//checks for height input change
const heightInput = document.getElementById('height');
heightInput.addEventListener('change', determineHeightAndThenDrawPyramid);

// checks for brick type selection change
const brickSelect = document.forms["brickForm"]["bricksSelect"];
brickSelect.addEventListener('change', determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
    // Get the height from the input field
    const height = parseInt(heightInput.value, 10);

    // Clear previous pyramids
    const pyramidDiv = document.getElementById('pyramid');
    pyramidDiv.innerHTML = ''; // Clear previous stuff
    
    // Get the selected brick type from the dropdown
    const brickType = brickSelect.value;

    if (!isNaN(height) && height > 0) {
        printPyramid(height, brickType); // Call the printPyramid function with the specified height and brick type
    } else {
        alert("Enter a valid positive integer for the height.");
    }
}

function printPyramid(height, brickType) {
    let emptySpace = "";
    let brick = brickType + brickType;
    
    for (let i = 0; i < height; i++){
        emptySpace = emptySpace + ".";
    }
    
    for (let i = 0; i < height; i++) {
        let layer = emptySpace + brick;
        console.log(layer);
        emptySpace = emptySpace.substring(1);
        brick = brick + brickType;
        
        let para = document.createElement("p");
        let rowStr = document.createTextNode(layer);
        para.appendChild(rowStr);
        
        let element = document.getElementById("pyramid");
        element.appendChild(para);
    }
}