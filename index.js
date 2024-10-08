const buttons = document.querySelectorAll('.button');

        let animationOn = false;

        const addAnimation = () => {
            buttons.forEach(button => {
                if (!animationOn) {
                    button.style.transition = "all 0.8s ease";
                    button.style.transform = "scale(1.05)";
                    button.style.fontSize = "120%"; 
                } else {
                    button.style.transform = "scale(1)";
                    button.style.fontSize = "119%"; 
                }
            });

            animationOn = !animationOn;
        };

        setInterval(addAnimation, 700);


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




        document.addEventListener('DOMContentLoaded', () => {
            const fixedBlock = document.querySelector('.fixed_block');
            const auditoryBlock = document.querySelector('.auditory_block');
        
            if (!fixedBlock || !auditoryBlock) {
                console.error('Elements not found');
                return;
            }
        
            window.addEventListener('scroll', () => {
                const rect = auditoryBlock.getBoundingClientRect();
                const windowHeight = window.innerHeight;
        
                if (rect.top <= windowHeight) {
                    fixedBlock.style.display = 'block'; // Показываем блок
                    fixedBlock.style.opacity = '1'; // Делаем блок видимым
                } else {
                    fixedBlock.style.opacity = '0'; // Прячем блок
                    setTimeout(() => {
                        if (fixedBlock.style.opacity === '0') {
                            fixedBlock.style.display = 'none'; // Скрываем блок полностью после плавного исчезновения
                        }
                    }, 300); // Время, совпадающее с длительностью перехода
                }
            });
        });



        var Emblem = {
            init: function(el, str) {
              var element = document.querySelector(el);
              var text = str ? str : element.innerHTML;
              element.innerHTML = '';
              for (var i = 0; i < text.length; i++) {
                var letter = text[i];
                var span = document.createElement('span');
                var node = document.createTextNode(letter);
                var r = (360/text.length)*(i);
                var x = (Math.PI/text.length).toFixed(0) * (i);
                var y = (Math.PI/text.length).toFixed(0) * (i);
                span.appendChild(node);
                span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
                span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
                element.appendChild(span);
              }
            }
          };
          
          Emblem.init('.emblem');