import './about.scss'

import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

export const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')

        }, 3000)

    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx={15}
                        letterClass={letterClass} />
                </h1>

                <p>I am that ambitious non stoppable dev,
                    I started my career life as a pharmacist
                    then I shifted to my programming dream
                    through Cairo University.
                </p>
                <p>
                    I learned software engineering not just coding,
                    this granted me a robust technical background that helped
                    me a lot in structuring web platforms from being an
                    idea into a full software product..
                </p>
                <p>
                    Here you can find the start...
                    <a style={{ 'textDecoration': 'none', 'color': 'wheat' }}
                        target='_blank' href='https://shazaaly.netlify.app/'>
                        Curious!
                    </a>
                </p>

            </div>

            <div className='stage-cube-cont'>

                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact}  />

                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact}  />

                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} />

                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3}  />

                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt}/>

                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs}/>

                    </div>

                </div>
               


            </div>

            <Loader type='pacman' />   {/* import from React-Loader */}


        </div>
    )
}
