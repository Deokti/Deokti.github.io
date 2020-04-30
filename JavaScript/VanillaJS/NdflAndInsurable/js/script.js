document.querySelector('.button').addEventListener('click', function(e) {
   let amountSalary, displayNdfl, fundFss, fundPension, fundFoms, traumatism, result, taskOne, taskTwo, taskThree, tastFour, tastFive, taskSix;

   //ввод колличества зарплаты. Она и берётся за основу вычетов
   amountSalary = document.querySelector('.enter-salary').value;

   enterTraumatism = document.querySelector('.fund-traumatism').value;

   //какой НДФЛ на данный момент. Сейчас это 13%
   displayNdfl = 0.13;

   //просчитывает НДФЛ и следующая задача отнимает от введённой зарплаты этот НДФЛ
   taskOne = Math.floor(amountSalary * displayNdfl);
   taskTwo = amountSalary - taskOne;

   //фонд социального страхования 2,9%
   fundFss = 0.029 //получается 2,9 
   taskThree = amountSalary * fundFss; //taskTwo / 100 * fundFss более сложный пример. 


   //Фонд пенсионного страхования, на данный момент 22%
   fundPension = 0.22;
   tastFour = amountSalary * fundPension;
   
   //Фонд медицинского страхования, на данный момент 5,1%
   fundFoms = 0.051;
   tastFive = amountSalary * fundFoms;

   //травматизм (умножает зарплату на полученную сумму в value, которая делится на 100 для получения нужного процента)
   taskSix = amountSalary * (enterTraumatism / 100);
   
   document.querySelector('.salary-deductions_span').innerHTML = amountSalary;
   document.querySelector('.display-ndfl_span').innerHTML = taskOne;
   document.querySelector('.deduction-ndfl_span').innerHTML = taskTwo;
   document.querySelector('.fund-fss_span').innerHTML = taskThree;
   document.querySelector('.fund-pension_span').innerHTML = tastFour;
   document.querySelector('.fund-foms_span').innerHTML = tastFive;
   document.querySelector('.fund-trauma_span').innerHTML = taskSix;
});
 
