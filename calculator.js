let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');



let calculator = {
    displayValue: '',

    init() {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleButtonPress(button);
                console.log(button.id);
            });
        });
    },

    handleButtonPress(button) {
        switch (button.id) {
            case 'clear':
                this.clearDisplay();
                break;
            case 'clear_all':
                this.clearAll();
                break;
            case 'backspace':
                this.backspace();
                break;

            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
            case 'log':
            case 'sqrt':
                this.getOperator(button.id);
                break;
            case 'equals':
                this.calculateResult();
                break;

            default:
                this.getNumber(button.textContent);
        }
    },

    clearDisplay() {
        this.displayValue = '';
        display.value = '';
    },

    clearAll() {
        this.displayValue = '';
        display.value = '';
    },

    backspace() {
        this.displayValue = this.displayValue.slice(0, -1);
        display.value = this.displayValue;
    },



    getNumber(number) {
        this.displayValue += number;
        display.value = this.displayValue;
    },

    getOperator(operator) {
        switch (operator) {
            case 'divide':
                this.displayValue += '/';
                break;
            case 'multiply':
                this.displayValue += '*';
                break;
            case 'subtract':
                this.displayValue += '-';
                break;
            case 'add':
                this.displayValue += '+';
                break;
            case 'sqrt':
                this.displayValue = Math.sqrt(this.displayValue);
                break;
            case 'log':
                this.displayValue = Math.log(this.displayValue);
                break;


        }
        display.value = this.displayValue;
    },

    calculateResult() {
        let result = eval(this.displayValue);
        this.displayValue = result;
        display.value = this.displayValue;
    }
};

calculator.init();