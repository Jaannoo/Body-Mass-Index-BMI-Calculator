const inputHeight = document.querySelector('#input-hgt');
const inputWeight = document.querySelector('#input-wgt');
const calBtn = document.querySelector('#cal-btn');
const resBtn = document.querySelector('#res-btn');

const resultArea = document.getElementById('result');

let myTotalBmi = 0;

const resetInput = () => {
    inputHeight.value = '';
    inputWeight.value = '';
};

resBtn.addEventListener('click', resetInput);

const calBmi = () => {
    const enteredHeight = inputHeight.value;
    const enteredWeight = inputWeight.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if (isNaN(bmi)){
        alert('Please check your inputs!')
        return;
    }

    //console.log(bmi);

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;

    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);

};

calBtn.addEventListener('click', calBmi);
resBtn.addEventListener('click', resetInput);