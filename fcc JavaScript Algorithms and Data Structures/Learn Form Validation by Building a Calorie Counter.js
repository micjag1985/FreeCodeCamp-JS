// Step 14
const calorieCounter = document.getElementById('calorie-counter');
// Step 15
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
// Step 16
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
// Step 17
let isError = false;
// Step 18,19,20,21,22,23,24,25,26,27,28
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
    // const regex = /\+-\s/;
    // const regex = /hello/;
    // const strArray = str.split('');
    // const cleanStrArray = [];
    // for (let i = 0; i < strArray.length; i++) {
    //     if (!['+', '-', ' '].includes(strArray[i])) {
    //         cleanStrArray.push(strArray[i]);
    //     }
    // }
}

// Step 29,30
function isInvalidInput(str) {
    const regex = /e/;
}

