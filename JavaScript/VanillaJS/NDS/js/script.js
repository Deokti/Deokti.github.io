document.querySelector('.button').addEventListener('click', (e) =>  {
   e.preventDefault();
   let enterSalary, taskOne, taskTwo, taskThree, taskFour;

   enterSalary = document.querySelector('.enter-salary').value;
   
   taskOne = enterSalary / 120 * 20;
   //округляет число после запятой, число округления записано в скобках.
   taskTwo = taskOne.toFixed(2);

   taskThree =  enterSalary - taskTwo;
   taskFour = taskThree.toFixed(2);

   document.querySelector('.display-nds_span').innerHTML = taskTwo;
   document.querySelector('.display-deduction_span').innerHTML = taskFour;
});
