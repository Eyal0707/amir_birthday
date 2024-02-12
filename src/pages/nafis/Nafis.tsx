import React from 'react'
import useRiddle from '../../hooks/useRiddle'
import "./nafis.css"

const Nafis = () => {

  const [answer, onAnswerChange] = useRiddle("kafri", "/greece");

  return (
    <div className='nafis'>
      <audio id='music' autoPlay loop>
        <source src='./assets/music/nigga_nae_nae.mp3' type='audio/mpeg' />
      </audio>
      <div className="faces">
        <img className='eyal' src="./assets/pictures/amir_nafis_face.png" />
        <img className='amir' src="./assets/pictures/eyal_nafis_face.png" />
      </div>
      <div className="riddle">
        <div className="question">
          <h1>יאמיייי</h1>
          <p>איזה טוסט מזמינים?</p>
          <p>(תכתוב בעברינגליש)</p>
        </div>
        <input value={answer} onChange={onAnswerChange} />
      </div>
    </div>
  )
}

export default Nafis