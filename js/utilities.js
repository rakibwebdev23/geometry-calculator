function getInputFieldById(inputId){
    const getInputFiled = document.getElementById(inputId);
    const getInputFieldString = getInputFiled.value;
    const inputFieldNumber = parseFloat(getInputFieldString);
    getInputFiled.value = '';
    return inputFieldNumber;
}

function inputFieldValueById(value){
    const inputField = document.getElementById(value);
    const inputFieldString = inputField.innerText;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;
    
}
function setElement(input, newValue){
    const calculateTotalInputValue = document.getElementById(input);
    calculateTotalInputValue.innerText = newValue;
}

// Parallalogram
function getInputParaFieldValueById(){
    const inputParaBaseField = inputFieldValueById('input-prallal-base');
    const inputParaHeightField = inputFieldValueById('input-prallal-height');
    const totalParaInputValue = inputParaBaseField * inputParaHeightField;
    setElement('parallalogram-value', totalParaInputValue); 
}

// Rhombus

function getInputRhombusFieldValueById(){
    const inputRhombusBaseField = inputFieldValueById('input-rhombus-base');
    const inputRhombusHeightField = inputFieldValueById('input-rhombus-height');
    const totalRhombusInputValue = 0.5 * inputRhombusBaseField * inputRhombusHeightField;
    setElement('rhombus-value', totalRhombusInputValue);
}

// Pentagon
function getInputPentagonFieldValueById(){
    const inputPentagonBaseField = inputFieldValueById('input-pentagon-base');
    const inputPentagonHeightField = inputFieldValueById('input-pentagon-height');
    const totalPentagonInputValue = 0.5 * inputPentagonBaseField * inputPentagonHeightField;
    setElement('pentagon-value', totalPentagonInputValue);    
}
// Ellipse
function getInputEllipseFieldValueById(){
    const inputEllipseBaseField = inputFieldValueById('input-ellipse-base');
    const inputEllipseHeightField = inputFieldValueById('input-ellipse-height');
    const totalEllipseInputValue = 3.14 * inputEllipseBaseField * inputEllipseHeightField;
    const totalEllipseInputValueAmount = totalEllipseInputValue.toFixed(2);
    setElement('ellipse-value', totalEllipseInputValueAmount);    
}

// click button work
function getInputFieldArea(element){
    const baseField = document.getElementById(element);
    const baseFieldString = baseField.value;
    const baseFieldNumber = parseFloat(baseFieldString);
    
    return baseFieldNumber;
}
function setElement(element, value){
    const elementField = document.getElementById(element);
    elementField.innerText = value;
}
function getTriangleFielValuedById(){
    const baseInputValue = getInputFieldArea('input-base');
    if(isNaN(baseInputValue)){
        alert('Invalid number');
        return;
    }
    setElement('base', baseInputValue);
    const heightInputValue = getInputFieldArea('input-height');
    if(isNaN(heightInputValue)){
        alert('Invalid number');
        return;
    }
    setElement('height', heightInputValue);
}
function getRectangleFielValuedById(){
    const baseInputValue = getInputFieldArea('input-width');
    if(isNaN(baseInputValue)){
        alert('Invalid number');
        return;
    }
    setElement('width', baseInputValue);
    const heightInputValue = getInputFieldArea('input-length');
    if(isNaN( heightInputValue)){
        alert('Invalid number');
        return;
    }
    setElement('length', heightInputValue);
}
