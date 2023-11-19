const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        const result = eval(display.textContent);
        display.textContent = result;
      } catch (error) {
        display.textContent = 'Error';
      }
    } else if (value === 'AC') {
      display.textContent = '';
    } else if (value === '.') {
      if (!display.textContent.includes('.')) {
        display.textContent += value;
      }
    } 
  
    else{
      display.textContent += value;
    }
  });
});
