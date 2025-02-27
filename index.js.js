console.log("hello it me mario");

document.addEventListener('DOMContentLoaded', () => {
function createCanvas () {
    const canvas = document.getElementById("block");

    for (let i = 0; i < 48; i++) {
        const square = document.createElement("canvas");
        square.width = 50;
        square.height = 50;
        canvas.appendChild(square);

    }

}


createCanvas();
/*#########################################################################*/

const colorPicker = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearButton");

const canvases = document.querySelectorAll('#block canvas');
console.log(canvases);
canvases.forEach(square => {
    console.log(square.width, square.height); 
    square.addEventListener ('mousemove',(e)=>{
        console.log('Mouse moved');
        if (e.buttons === 1) { // Check if the left mouse button is pressed
            const ctx = square.getContext('2d');
            ctx.fillStyle = colorPicker.value; // Use the selected color
            ctx.fillRect(0, 0, square.width, square.height); }
    });
});


clearButton.addEventListener('click',()=>{
    canvases.forEach(square => {
        const ctx = square.getContext('2d');
        ctx.fillStyle = 'white'; // Reset to default color (white)
        ctx.fillRect(0, 0, square.width, square.height);  
    });
});

});

