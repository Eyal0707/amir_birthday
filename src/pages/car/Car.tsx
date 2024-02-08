import React from 'react'
import "./Car.css";
import useRiddle from '../../hooks/useRiddle';

const Car = () => {
  const [answer, onAnswerChange] = useRiddle("raptor", "/road")
  return (
    <div className='car'>


      <audio id='music' autoPlay loop>
        <source src='./assets/music/shake_it_off.mp3' type='audio/mpeg' />
      </audio>
      <div className="main">
        <div className="riddle">
          <div className="question">
            <h1>אני בחוץ!</h1>
            <p>בוא יוצאים מזמן לא התראנו! הגיע הזמן לעוד יציאת אמיר ואייל קלאסית! אנחנו הולכים לסרט ואחרי אפשר ללכת לפארק ההוא עם הציפורים שאהבת.</p>
            <h2>חידה #2</h2>
            <h3>למה הציפורים האלה דומות כשהן רצות?</h3>
          </div>
          <input className='answer' value={answer} onChange={onAnswerChange} />
        </div>
        <img className='car_image' src="./assets/pictures/car.png" />
        <img className='car-face' src="./assets/pictures/eyal_car_face.png" />
      </div>
    </div>
  )
}

export default Car