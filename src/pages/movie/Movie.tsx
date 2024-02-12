import React, { useEffect, useState } from 'react'
import "./movie.css"
import { useNavigate } from 'react-router-dom'
import useRiddle from '../../hooks/useRiddle';

const Movie = () => {

  const [isHint, setIsHint] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHint(true)
    }, 20000)
  }, [])

  const [answer, onAnswerChange] = useRiddle("menfis", "/nafis");

  return (
    <div className='movie'>
      <video src='./assets/videos/how_to_get_into_porn.mp4' autoPlay />

      <div className="riddle">
        <div className="question">
          <h1>חידה #3</h1>
          <p>אנחנו רעבים אחרי הסרט לאן הולכים לאכול?</p>
          {
            isHint && <p>(כנראה אני שוב מתבלבל בשם)</p>
          }
        </div>
        <input value={answer} onChange={onAnswerChange} />
      </div>
    </div>
  )
}

export default Movie