import { Button } from "react-bootstrap";

export const ThankYouScreen = ({ onNextHandler }) => {
  const finish = () => {
    console.log("hemos terminado");
    onNextHandler();
  };

  return (
    <div className="p-3 thankyou">
      <div>
        <h3>¡Hemos recibido tu postulación! 🎉</h3>
        <p>Tu postulación se encuentra cargada en PeanutHub.</p>
        <p>
          Te estaremos informando a medida que avanza tu proceso de postulación
          por correo.
        </p>
        <p>Muchas gracias por querer ser parte del Mani! 🥜</p>
      </div>
      <div className="centered">
        <Button
          className="peanut-button peanut-button-wide btn-dark"
          onClick={() => finish()}
        >
          Ver otras Postulaciones →
        </Button>
      </div>
    </div>
  );
};
