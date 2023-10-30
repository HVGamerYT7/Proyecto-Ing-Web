import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import trivias from '../data/preguntas.json';
//Dame un codigo que sume 


function Juego() {
  const [show, setShow] = useState(false);
  const [randomTrivia, setRandomTrivia] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClose = () => {
    setShow(false);
    setIsCorrect(null); // Reinicia el estado de respuesta
  };

  const handleShow = () => {
    selectRandomTrivia();
    setShow(true);
  };

  

  



  const selectRandomTrivia = () => {
    const randomIndex = Math.floor(Math.random() * trivias.length);
    setRandomTrivia(trivias[randomIndex]);
    setSelectedAnswer(null); // Reinicia la respuesta seleccionada
    setIsCorrect(null); // Reinicia el estado de respuesta
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (selectedAnswer !== null && parseInt(selectedAnswer) === randomTrivia.respuesta_correcta) {
      // Respuesta correcta
      setIsCorrect(true);
    } else {
      // Respuesta incorrecta
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Mostrar Trivia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trivia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {randomTrivia && (
            <div>
              <h2>Pregunta:</h2>
              <p>{randomTrivia.pregunta}</p>
              <h3>Respuestas:</h3>
              <form>
                {randomTrivia.respuestas.map((respuesta, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="respuesta"
                      value={index}
                      checked={selectedAnswer === index.toString()}
                      onChange={handleAnswerChange}
                    />
                    {respuesta}
                  </div>
                ))}
              </form>
              {isCorrect === true && <span style={{ color: 'green' }}>Respuesta Correcta</span>}
              {isCorrect === false && <span style={{ color: 'red' }}>Respuesta Incorrecta</span>}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={checkAnswer}>
            Verificar Respuesta
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Juego;
