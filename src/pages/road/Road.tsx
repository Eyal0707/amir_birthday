import React, { useEffect, useState } from 'react'
import "./Road.css"
import { useNavigate } from 'react-router-dom';

const Road = () => {
  const [isGameOn, setIsGameOn] = useState(false);
  const [gameStartCountdown, setGameStartCountdown] = useState(10);

  const [targetCount, setTargetCount] = useState(1);

  const [isLost, setIsLost] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const [currentTimeOut, setCurrentTimeOut] = useState<NodeJS.Timeout>();


  const navigate = useNavigate();

  useEffect(() => {


    const intervalId = setInterval(() => {
      if (gameStartCountdown > 0) {
        setGameStartCountdown(prev => prev - 1);
      } else {
        clearInterval(intervalId);
        startGame()
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [gameStartCountdown]);


  function targetTimeOut(targetId: number) {
    console.log(targetCount, targetId)
    if (targetId >= targetCount) {
      setIsLost(true);
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  function startGame() {
    setIsGameOn(true);
    setCurrentTimeOut(setTimeout(() => targetTimeOut(targetCount), 3000));
  }

  function onTargetClick() {
    clearTimeout(currentTimeOut);
    if (targetCount > 20) {
      setIsWin(true);
      setTimeout(() => {
        navigate("/movie");
      }, 2000)
    } else {
      setCurrentTimeOut(setTimeout(() => targetTimeOut(targetCount + 1), 3000))
    }
    setTargetCount(targetCount + 1);
  }


  return (
    <div className='road'>
      <audio id='music' autoPlay loop>
        <source src='./assets/music/tokio_drift.mp3' type='audio/mpeg' />
      </audio>
      {
        isGameOn
          ? <div className="game">
            {
              isLost
                ? <div className="game-explain">
                  <audio id='crash' autoPlay loop>
                    <source src='./assets/sound/car_crash.mp3' type='audio/mpeg' />
                  </audio>
                  <h1>יא אפס הרגת אותנו!</h1>
                </div>
                : <>
                  {
                    isWin
                      ? <div className="game-explain">
                        <h1>יששששששששש!!!!!!!!!!</h1>
                      </div>
                      : <img src="./assets/pictures/traffic_light.jpg" className={`target count_${targetCount}`} onClick={onTargetClick} />
                  }
                </>
            }
          </div>
          : <div className="game-explain">
            <h1>אנחנו מאחרים לסרט!</h1>
            <p>תלחץ על כל הרמזורים כדי שיהיו ירוקים! אני לא עוצר בהם!!</p>
            <p>חלק מהשיבוטים איטיים או משהו לא יודע...</p>
            <h2>{gameStartCountdown}</h2>
          </div>
      }
    </div>
  )
}

export default Road