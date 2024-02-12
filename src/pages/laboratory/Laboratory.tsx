import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Potion from "../../components/Poition.tsx/Potion";
import "./Laboratory.css";

const Laboratory = () => {
  const [gameStartCountdown, setGameStartCountdown] = useState(25);
  // const [gameStartCountdown, setGameStartCountdown] = useState(1);
  const [selectedPotions, setSelectedPotions] = useState<string[]>([]);
  const [isGameOn, setIsGameOn] = useState(false);
  const [isWin, setIsWin] = useState<boolean | null>(null); // Initialize with null
  const [heartsLeft, setHeartsLeft] = useState(3);
  const [showRetryMessage, setShowRetryMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gameStartCountdown > 0) {
        setGameStartCountdown((prev) => prev - 1);
      } else {
        clearInterval(intervalId);
        startGame();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [gameStartCountdown]);

  useEffect(() => {
    if (isWin === false) {
      setTimeout(() => {
        setShowRetryMessage(true);
      }, 1800);
    } else {
      if (isWin) {
        setTimeout(() => {
          navigate("/movie");
        }, 4000)
      }
    }
  }, [isWin]);

  function mixPotions(selectedPotions: string[]) {
    const blueAndYellowMixed =
      selectedPotions.includes("blue") &&
      selectedPotions.includes("yellow") &&
      selectedPotions.length === 2;

    if (blueAndYellowMixed) {
      setIsWin(true);
      setHeartsLeft(3);
    } else {
      heartsLeft > 0 ? setHeartsLeft((prev) => prev - 1) : setIsWin(false);
    }
  }

  function handlePotionSelection(color: string) {
    // Add or remove the selected potion from the state
    setSelectedPotions((prevSelectedPotions) => {
      if (prevSelectedPotions.includes(color)) {
        return prevSelectedPotions.filter((potion) => potion !== color);
      } else {
        return [...prevSelectedPotions, color];
      }
    });
  }

  function startGame() {
    setIsGameOn(true);
  }

  function handleRetry() {
    setIsWin(null)
    setHeartsLeft(3)
    setShowRetryMessage(false)
    setSelectedPotions([])
  }

  const hearts = [];
  for (let i = 0; i < heartsLeft; i++) {
    hearts.push(
      <img
        key={i}
        src="./assets/pictures/minecraft-full-heart.png"
        alt="health"
        width="80px"
      />
    );
  }

  return (
    <div className="laboratory">
      <audio id="music" autoPlay loop>
        <source src='./assets/music/Dville Santa - Laboratory (Official Music Video) (Dir. by @josholc).mp3' type='audio/mpeg' />
      </audio>
      {isGameOn ? (
        <div>
          <div className="health-bar">{hearts}</div>
          {isWin === null ? (
            <div className="game-container">
              <div className="brewingTable">
                <Potion
                  src={"./assets/pictures/potions/blue-potion.webp"}
                  color={"blue"}
                  onSelect={() => handlePotionSelection("blue")}
                />
                <Potion
                  src={"./assets/pictures/potions/yellow-potion.webp"}
                  color={"yellow"}
                  onSelect={() => handlePotionSelection("yellow")}
                />
                <Potion
                  src={"./assets/pictures/potions/red-potion.webp"}
                  color={"red"}
                  onSelect={() => handlePotionSelection("red")}
                />
                <Potion
                  src={"./assets/pictures/potions/poison2.png"}
                  color={"orange"}
                  onSelect={() => handlePotionSelection("orange")}
                />
              </div>
              <button onClick={() => mixPotions(selectedPotions)} className="mix-btn">
                !בחרתי
              </button>
            </div>
          ) : null}
          {!showRetryMessage ?
            isWin === null ? null :
              !isWin ? (
                // explode if lose
                <>                <img
                  src="./assets/pictures/explosion.png"
                  className="explosion"
                  alt="explosion"
                  width="800px"
                />
                  <audio id="music" autoPlay loop>
                    <source src='./assets/music/mixkit-arcade-game-explosion-2759.wav' type='audio/mpeg' />
                  </audio>
                </>
              ) : (
                // nerd with green potion if win
                <div className="nerd-going-hard">
                  <>
                    <div>
                      <img
                        src="./assets/pictures/nerd.png"
                        className="nerd"
                        alt="nerd"
                        width="400px"
                      />
                      <img
                        src="./assets/pictures/potions/green-potion.webp"
                        className="green-potion"
                        alt="green-potion"
                        width="200px"
                      />
                    </div>
                    <audio id="music" autoPlay loop>
                      <source src='./assets/music/yay!.mp3' type='audio/mpeg' />
                    </audio>
                  </>
                </div>
              ) :
            <div className="retry-screen">
              <h3>ממממ... את זה לא הייתי שותה...</h3>
              <p>נסה שנית...</p>
              <img
                src="./assets/pictures/yoffe-face.png"
                className="yoffe-face"
                alt="yoffe-face"
                width="70px"
              />
              <h2>
                ---
                <br />
                מאילו 2 צבעים מכינים את הצבע ירוק?
                <br />
                ---
              </h2>
              <button onClick={() => handleRetry()} className="mix-btn">
                נסיון אחרון! או ש...
              </button>
            </div>
          }
        </div>
      ) : (
        <div className="game-explain">
          <h1>רינג! רינג! רינג!</h1>
          <p>- - - - - - - - - - - - - - - - - - - - -</p>
          <h2> האמיר שאני מכיר מבין בשיקויים וכימיה וכזה...</h2>
          <img
            src="./assets/pictures/yoffe-face.png"
            className="yoffe-face"
            alt="yoffe-face"
            width="70px"
          />
          <p>
            השיבוטים שונאים רעל ירוק <br />( כי זה רדיואקטיבי ☠️) או משהו...
          </p>
          <p>
            תערבב את הכימיקלים ככה שהשילוב יצא ירוק ואז תשתה הכל!
            <br />
            תוכל להמשיך הלאה רק אם תשרוד...
          </p>
          <h2>{gameStartCountdown}</h2>
        </div>
      )}
    </div>
  );
};

export default Laboratory;
