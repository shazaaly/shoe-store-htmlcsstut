import './about.scss'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Link, NavLink } from 'react-router-dom'

export const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx={15} />
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
                    <a style={ {'textDecoration' : 'none' , 'color' : 'wheat'}}
                     target='_blank' href='https://shazaaly.netlify.app/'>
                     Curious!
                     </a>
                </p>

            </div>


        </div>
    )
}
