import '../AnimatedLetters/index.scss'

import React from 'react'
/* idx is just a starting point to brgin numbering : 
example if idx = 12 : <span class="text-animate_14">z</span> */
export const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>


  )
}
