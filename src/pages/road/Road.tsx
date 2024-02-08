import React, { useEffect, useState } from 'react'
import "./Road.css"

const Road = () => {
  const [isGameOn, setIsGameOn] = useState(false);
  const [gameStartCountdown, setGameStartCountdown] = useState(2);

  const [targetCount, setTargetCount] = useState(1);

  const [isLost, setIsLost] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const [currentTimeOut, setCurrentTimeOut] = useState<NodeJS.Timeout>();



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
    }
  }
  function startGame() {
    setIsGameOn(true);
    setCurrentTimeOut(setTimeout(() => targetTimeOut(targetCount), 4000));
  }

  function onTargetClick() {
    clearTimeout(currentTimeOut);
    if (targetCount > 20) {
      setIsWin(true);
    } else {
      setCurrentTimeOut(setTimeout(() => targetTimeOut(targetCount + 1), 4000))
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
                ? <div className="lost">LOST</div>
                : <>
                  {
                    isWin
                      ? <div className="win"></div>
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