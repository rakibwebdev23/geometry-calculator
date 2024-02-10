
function calculateTriangleTotalInputValue(){
    const inputBaseValue = getInputFieldById('input-base');
    const inputHeightValue = getInputFieldById('input-height');
    const totalInputValue = 0.5 * inputBaseValue * inputHeightValue;
    if(isNaN(totalInputValue)){
        alert('Invalid number');
        return;
    }
    setElement('total-triangle-value', totalInputValue);
}

function calculateRectangleTotalInputValue(){
    const inputWidthValue = getInputFieldById('input-width');
    const inputLengthValue = getInputFieldById('input-length');
    const totalRectangleInputValue = inputWidthValue * inputLengthValue;
    if(isNaN(totalRectangleInputValue)){
        alert('Invalid number');
        return;
    }
    setElement('total-rectangle-calculate', totalRectangleInputValue);
}


document.getElementById('triangle').addEventListener('click', function(){
    calculateTriangleTotalInputValue();
    
})
document.getElementById('rectangle').addEventListener('click', function(){
    calculateRectangleTotalInputValue();
})
document.getElementById('btn-base').addEventListener('click', function(){
    getTriangleFielValuedById();

})
document.getElementById('btn-rec').addEventListener('click', function(){
    getRectangleFielValuedById();
})