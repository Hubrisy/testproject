// function updateTimer() {
//     const endTime = new Date().getTime() + 22 * 43 * 24 * 1000; 

//     function countdown() {
//         const now = new Date().getTime();
//         const distance = endTime - now;

//         if (distance < 0) {
//             location.reload();
//             return;
//         }

//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         document.getElementById("timer").innerHTML =
//             hours + "ч " +
//             minutes + "м " +
//             seconds + "с";

//         setTimeout(countdown, 1000);
//     }

//     countdown();
// }

// updateTimer();


function updateTimer() {
    const endTime = new Date().getTime() + 22 * 45 * 23 * 1000; 

    function countdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            document.querySelectorAll('.timer').forEach(timer => {
                timer.innerHTML = "Время истекло";
            });
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timeString = `${hours}ч ${minutes}м ${seconds}с`;

        document.querySelectorAll('.timer').forEach(timer => {
            timer.innerHTML = timeString;
        });

        setTimeout(countdown, 1000);
    }

    countdown(); 
}

updateTimer();