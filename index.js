const buttons = document.querySelectorAll('.button');

        let animationOn = false;

        const addAnimation = () => {
            buttons.forEach(button => {
                if (!animationOn) {
                    button.style.transition = "all 0.5s ease";
                    button.style.transform = "scale(1.05)";
                    button.style.fontSize = "120%"; 
                } else {
                    button.style.transform = "scale(1)";
                    button.style.fontSize = "115%"; 
                }
            });

            animationOn = !animationOn;
        };

        setInterval(addAnimation, 700);


// const hideBtn = document.querySelectorAll(".plus_btn");
// const questAnswer = document.querySelectorAll('.question_answer');


// let isActive = false;

// const getQuest = () => {
//     questAnswer.forEach(quest => {
//         if(!isActive){
//             quest.style.display = "block"
//         }else{
//             quest.style.display = "none"
//         }
//     })
//     isActive = !isActive
// }

// hideBtn.addEventListener('click', getQuest())

// hideBtn.addEventListener('click', () => {
//     if(!isActive){
//         questAnswer.style.display = "block"
//     }else{
//         questAnswer.style.display = "none"
//     }

//     isActive = !isActive
//     // questAnswer.style.display = "block"
// })


// const hideBtn = document.querySelector(".plus_btn");
// const questAnswer = document.querySelectorAll('.question_answer'); // Используем querySelectorAll для получения коллекции элементов

// let isActive = false;

// const getQuest = () => {
//     questAnswer.forEach(quest => { // Перебираем все элементы
//         if (!isActive) {
//             quest.style.display = "block";
//         } else {
//             quest.style.display = "none";
//         }
//     });
//     isActive = !isActive; // Переключаем состояние
// }

// // Передаем ссылку на функцию, а не результат её выполнения
// hideBtn.addEventListener('click', getQuest);


const button = document.querySelectorAll('.plus_btn');
        const answers = document.querySelectorAll('.question_answer');

        button.forEach((button, index) => {
            button.addEventListener('click', () => {
                const answer = answers[index];
                const isVisible = answer.style.display === 'block';

                // Скрываем все ответы
                answers.forEach(ans => ans.style.display = 'none');

                // Показываем только нужный ответ
                if (!isVisible) {
                    answer.style.display = 'block';
                }
            });
        });