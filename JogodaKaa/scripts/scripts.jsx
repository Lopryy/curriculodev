document.addEventListener('DOMContentLoaded',()=>{
    const canvas= document.getElementById('gameCanvas');
    const ctx= canvas.getContext('2d');
    const gridsize= 20;
    const titleCout= canvas.width / gridsize;
    let snake=[{x: 10, y: 10}];
    let apple= {x: 15, y: 15};
    let xVelocity= 0;
    let yVelocity= 0;
    let score= 0; 

    function drawSnake(){
        ctx.fillStyle = 'green';
        snake.forEach((segment)=>{
            ctx.fillRect(segment.x * gridsize, segment.y * gridsize, gridsize, gridsize);
        })
    }
    function drawApple(){
        ctx.fillStyle= 'red';
        ctx.fillRect(apple.x * gridsize, apple.y * gridsize, gridsize, gridsize);
    }

    function update() {
        const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};

        //quando a cobra atinge uma das bordas muda a posição da cobra para a borda oposta
        if (head.x < 0 ) head.x =titleCout -1;
        if (head.x >= titleCout) head.x =0;
        if (head.y < 0) head.y =titleCout - 1;
        if (head.y >= titleCout) head.y =0;

        //adciona um novo elemento ao array
        //simula a movimentação para a frente.
        snake.unshift(head);

        if (head.x === apple.x && head .y === apple.y){
            //a cobra pegou a maçã, aumente a pontuação e mude para a posição da maçã.
            score++;
            //atualiza a exibição da pontuação 
            document.getElementById('score').textContent = score;

            apple.x = Math.floor(Math.random() * titleCout);
            apple.y = Math.floor(Math.random() * titleCout);
        } else {
            //remove o ultimo elemento do array.
            //simula a movimentação para a frente quando não há colisão com a maçã.
            snake.pop();
        }
    }

 //checa quando a cobra colide com ela mesma.
    function checkCollision() {
        const head = snake[0]; 
        for (let i = 1; i < snake.length; i++ ) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true; //Colisão detectada
            }

        }
        return false; //Sem colisão 
    }
   
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.font="20px Arial";
        ctx.fillText("Jogo da Kaa" ,20, 20);

        drawSnake();
        drawApple();
    }
    
    function resetGame(){
        snake = [{ x: 10, y: 10}];
        apple = { x: 15, y: 15 };
        xVelocity =0;
        yVelocity =0;
        score =0;
        //Atualiza a exibição da pontuação
        document.getElementById('score').textContent = score;
    }

    function loop (){
        update();

        if (checkCollision()) {
            // Game over
             alert('Game over!');
             resetGame();
        }
    
        draw();

        setTimeout(()=>{
            loop();
        }, 100);
    }

    loop();

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        switch (e.key){
            case 'ArrowUp' :
                if (yVelocity !== 1) {
                    xVelocity=0;
                    yVelocity= -1;

                }
                break;
             case 'ArrowDown' :
                if (yVelocity !== -1) {
                    xVelocity = 0;
                    yVelocity = 1;
                }
                    break;
             case 'ArrowLeft' :
                if (xVelocity !== 1 ) {
                    xVelocity = - 1;
                    yVelocity = 0;
                }
                        
                break;
            case 'ArrowRight':
                if (xVelocity !== -1) {
                    xVelocity = 1;
                    yVelocity = 0;
                }
                     break;


        }
    })
})


