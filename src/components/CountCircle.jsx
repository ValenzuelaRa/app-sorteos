import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountCircle = ({ cuentaRegresiva }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold text-white mb-4">Countdown Timer</h1>
      <div className="relative">
        <CountdownCircleTimer
          isPlaying
          duration={cuentaRegresiva}
          initialRemainingTime={cuentaRegresiva}
          // Cambiar colores cada 2 segundos
          colors={['#004777', '#F7B801', '#A30000', '#A30000']} // Lista de colores
          colorsTime={[cuentaRegresiva, cuentaRegresiva - 2, cuentaRegresiva - 4, 0]} // Cambiar cada 2 segundos
          strokeWidth={12}
          size={180}
          onComplete={() => {
            return { shouldRepeat: true, delay: 0.1 };
          }}
        >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            // Formato de tiempo
            return (
              <div className="flex flex-col justify-center items-center text-neutral-800 text-xl font-bold">
                {minutes > 0 ? (
                  <>
                    <span>{minutes}</span>
                    <span className="text-lg">:</span>
                    <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                  </>
                ) : (
                  <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                )}
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CountCircle;
