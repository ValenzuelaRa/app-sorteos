import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CountWin({ onCountdownComplete }) {
  // Define el tiempo inicial de la cuenta regresiva
  const duration = 10; // Tiempo de 10 segundos para la demostración

  return (
    <div className="text-center">
      <CountdownCircleTimer
        isPlaying={true}
        duration={duration}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000', 0.33]]}
        onComplete={onCountdownComplete} // Llama a la función al completar la cuenta regresiva
        size={150} // Tamaño del círculo
        strokeWidth={12} // Ancho del borde del círculo
      >
        {({ remainingTime }) => (
          <div className="text-4xl font-bold text-black">
            {remainingTime}
          </div>
        )}
      </CountdownCircleTimer>

    </div>
  );
}

export default CountWin;
