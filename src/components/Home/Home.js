import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import letterLogo from '../../assets/images/logo-s.png'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Logo } from './Logo/Logo'


export const Home = () => {
    let nameArray = ['h', 'a', 'z', 'a']
    let jobArray =
        ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    const [letterClass, setLetterClass] = useState('text-animate')

    /* set letters class into class that activates upon hover */

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')


        }, 4000)

    }, [])



    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                    <img src={letterLogo} alt='web-developer' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />

                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />.

                </h1>
                <h2>
                    JavaScript | Fullstack Web Developer
                </h2>
                <Link className='flat-button' to='/contact'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}
