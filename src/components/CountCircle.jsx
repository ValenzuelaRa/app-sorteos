import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountCircle = ({ cuentaRegresiva, onTimerComplete }) => {
    return (
        <div className="flex flex-col items-center m-auto">
            <div className="relative">
                <CountdownCircleTimer
                    isPlaying
                    duration={cuentaRegresiva}
                    initialRemainingTime={cuentaRegresiva}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[cuentaRegresiva, cuentaRegresiva - 2, cuentaRegresiva - 4, 0]}
                    strokeWidth={12}
                    size={180}
                    onComplete={() => {
                        onTimerComplete(); // Llama la función pasada como prop
                        return { shouldRepeat: false };
                    }}
                >
                    {({ remainingTime }) => {
                        const minutes = Math.floor(remainingTime / 60);
                        const seconds = remainingTime % 60;

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
