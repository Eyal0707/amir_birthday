import { useEffect, useState } from "react";
import "./Laboratory.css";
import Potion from "../../components/Poition.tsx/Potion";

const Laboratory = () => {
  // const [gameStartCountdown, setGameStartCountdown] = useState(15);
  const [gameStartCountdown, setGameStartCountdown] = useState(1);
  const [selectedPotions, setSelectedPotions] = useState<string[]>([]);
  const [isGameOn, setIsGameOn] = useState(false);
  const [isWin, setIsWin] = useState(false);

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

  function mixPotions(selectedPotions: string[]) {
    const blueAndYellowMixed =
      selectedPotions.includes("blue") && selectedPotions.includes("yellow");

    if (blueAndYellowMixed) {
      setIsWin(true);
    } else {
      setIsWin(false);
    }
  }

  function handlePotionSelection(color: string) {
    // Add or remove the selected potion from the state
    setSelectedPotions((prevSelectedPotions) => {
      if (prevSelectedPotions.includes(color)) {
        // console.log(prevSelectedPotions);
        return prevSelectedPotions.filter((potion) => potion !== color);
      } else {
        return [...prevSelectedPotions, color];
      }
    });
  }

  function startGame() {
    setIsGameOn(true);
  }

  return (
    <div className="laboratory">
      {/* <audio id="music" autoPlay loop>
        <source src='./assets/music/tokio_drift.mp3' type='audio/mpeg' />
      </audio> */}
      {isGameOn ? (
        <div>
          {/* <img
            src="./assets/pictures/potions/Brewing_Stand.webp"
            className="poison"
            alt="poison"
            width="300px"
          /> */}
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
              src={"./assets/pictures/potions/poison.png"}
              color={"orange"}
              onSelect={() => handlePotionSelection("orange")}
            />
          </div>
          <button onClick={() => mixPotions(selectedPotions)}>!בחרתי</button>

          {isWin ? (
            // explode if lose
            <img
              src="./assets/pictures/explosion.png"
              className="explosion"
              alt="explosion"
              width="800px"
            />
          ) : (
            // nerd with green potion if win
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
          )}
        </div>
      ) : (
        <div className="game-explain">
          <h1> האמיר שאני מכיר מבין בשיקויים וכימיה וכזה...</h1>
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

// things left to fix: 
// - css styling in general
// - logic for routing in and out of the page
// - correct blue + yellow = nerd condition, currently every answer that includes the blue + yellow are correct, it should be only them
// - show no default image untill בחרתי is pressed 
