import { add, subtract } from './addSubtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    let res;

    try {
        switch (operation.value) {
            case 'add':
                res = add(a, b);
                break;
            case 'subtract':
                res = subtract(a, b);
                break;
            case 'multiply':
                res = multiply(a, b);
                break;
            case 'divide':
                res = divide(a, b);
                break;
        }
        result.value = res;
    } catch (error) {
        result.value = error.message;
    }
});

clearBtn.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    result.value = '';
});
