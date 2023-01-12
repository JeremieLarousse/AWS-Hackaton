import React from 'react';
import "../../styles/testjs.css";


const TestJV = () => {

    /*   const myCanva = useRef();
  
      const world = document.querySelector('#gameBoard');
      // const c = myCanva.getContext.focus('2d');
  
      world.width = world.clientWidth;
      world.height = world.clientHeight;
      let frames = 0;
  
      const keys = {
  
  
          ArrowLeft: { pressed: false },
          ArrowRight: { pressed: false },
      }
  
  
      class Player {
          constructor() {
              this.width = 32;
              this.height = 32;
              this.velocity = {
  
                  x: 0,
                  y: 0
  
              }
              this.position = {
                  x: (world.width - this.width) / 2,
                  y: world.height - this.height
              }
          }
  
  
          draw() {
  
  
              c.fillStyle = 'white';
              c.fillRect(this.position.x, this.position.y, this.width, this.height);
  
  
          }
  
          update() {
  
  
              this.position.x += this.velocity.x;
              this.draw();
  
          }
  
      }
  
      const player = new Player();
  
      const animationLoop = () => {
  
          requestAnimationFrame(animationLoop);
          player.update();
          frames++;
  
      }
      animationLoop();
   */



    return (
        <div>
            <h2>Mon déplacement de gauche à droite</h2>
            <canvas id="gameBoard" ></canvas>
            <div className="carré"></div>
        </div>
    );
};

export default TestJV;