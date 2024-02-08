import useRiddle from '../../hooks/useRiddle';
import "./Home.css";

const Home = () => {
    const [answer, onAnswerChange] = useRiddle("it takes two", "/car");

    return (
        <div className='home'>
            <audio id='music' autoPlay loop>
                <source src='./assets/music/aug_22.mp3' type='audio/mpeg' />
            </audio>
            <img src="./assets/pictures/fly.png" className='fly' alt='bzzz bzzz ani zvuv'/>
            <img src='./assets/pictures/eyal_face.png' className='face' alt='eyal is ugly' />
            <div className="riddle">
                <div className="explanation">
                    <h1>ברוכים הבאים</h1>
                    <p>לאחרונה צצה בעיה שיש מלא שיבוטים שלך מסתובבים בעולם. כדי לוודא שהמתנה שלך תגיע לאדם הנכון, אתה תיהיה חייב לעבור רצף חידות שרק אמיר האמיתי היה יודע ברחבי ההסטוריה שלנו!</p>
                </div>
                <div className="question">
                    <h2>חידה #1</h2>
                    <p>תמיד טוב להתחיל בקלאסיקה ולהפיל את השיבוטים הגרועים על ההתחלה!</p>
                    <h3>כמה זה לוקח?</h3>
                    <p>(מנסיון עבר תענה תשובה מלאה באנגלית אותיות קטנות. זה לא יאפשר לך לכתוב כל דבר אחר)</p>
                </div>
                <input className="answer" value={answer} onChange={onAnswerChange} />
            </div>
            <img src='./assets/pictures/amir_face.png' className='face' alt='amir face'/>
        </div>
    )
}

export default Home;