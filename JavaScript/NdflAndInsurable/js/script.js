document.querySelector('.task-one__button').onclick = taskButtonOne; //обращаемся к кнопке, которая и производит расчитывание


function taskButtonOne() {
    let grossEarnings, vacation, calculate, base, lars, track;
    
    grossEarnings = document.querySelector('.task-one__total-earnings').value; //первое число, общий зароботок за 12 месяцев
    parseInt(grossEarnings)

    vacation = document.querySelector('.task-one__vacation').value; //второе значение, на сколько дней человек уходит в отпуск
    parseInt(vacation)

    base = (12 * 29.3);
    
    calculate = grossEarnings / base * vacation;

    lars = calculate * 0.13;

    track = calculate - lars;

    document.querySelector('.task-one__number-holidays_span').innerHTML = calculate;
    document.querySelector('.task-one__number-ndfl_span').innerHTML = lars;
    document.querySelector('.task-one__amount-hand_span').innerHTML = track;

}
