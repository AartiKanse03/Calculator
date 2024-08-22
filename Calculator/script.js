let currentInput = '';
        let currentOperation = null;
        let operand1 = null;

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function setOperation(operation) {
            if (currentInput === '' && operation === '-') {
                appendNumber(operation);
                return;
            }
            if (currentInput === '') return;
            if (operand1 === null) {
                operand1 = parseFloat(currentInput);
            } else if (currentOperation) {
                operand1 = operate(operand1, parseFloat(currentInput), currentOperation);
            }
            currentOperation = operation;
            currentInput = '';
            updateDisplay();
        }

        function calculate() {
            if (currentOperation && currentInput !== '') {
                const result = operate(operand1, parseFloat(currentInput), currentOperation);
                currentInput = result.toString();
                currentOperation = null;
                operand1 = null;
                updateDisplay();
            }
        }

        function clearDisplay() {
            currentInput = '';
            currentOperation = null;
            operand1 = null;
            updateDisplay();
        }
        function deleteLastChar() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }                              

        function updateDisplay() {
            document.getElementById('display').value = currentInput;
        }

        function operate(a, b, operation) {
            switch (operation) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
                default: return b;
            }
        }    
