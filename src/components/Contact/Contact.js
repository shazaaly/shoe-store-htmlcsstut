import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import { AnimatedLetters } from "../AnimatedLetters/AnimatedLetters";
import emailjs from '@emailjs/browser';
// added by me : //
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');




export const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    // console.log(refForm.current);  /* form make useRef(null) at first*/
    useEffect(() => {

        setTimeout(() => {
            setLetterClass(('text-animate-hover'))
            mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhemFhbHkiLCJhIjoiY2xhMHVkN3liMDE2NjN2b2pwaGtja2phbyJ9.v7L-z2nOQ-0qWC0W7n2dPQ';
            var map = new mapboxgl.Map({
                container: 'idmap',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [31.3742, 30.1033], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
            const marker = new mapboxgl.Marker({
                color: "#ECCD01",
                draggable: true
            }).setLngLat([31.3742, 30.1033])
                .addTo(map);



        }, 3000)

    }, [])


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            // 'gmail',
            'service_4z82hxc',  /*serviceId */
            'template_bg5ox0u',  /*templateId */
            refForm.current,
            'EqG6lOwzxV_R-WaWB'  /* publicKey */
        ).then(() => {
            alert('Message successfully sent.')
            window.location.reload(false) /*The location.reload() method reloads the current URL, like the Refresh button.*/

        })

    }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I have an excellent background as
                        a Web Developer along with
                        my academic education in Computer
                        Science and Technology.
                        The experience and my
                        academic education have
                        provided me with some outstanding
                        and technical skills.

                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <div className='halvesToFlex'>
                                    <li className='half'>
                                        <input type='text' name='name' placeholder='Name' required />
                                    </li>

                                    <li className='half'>
                                        <input type='email' name='email' placeholder='Email' required />
                                    </li>
                                </div>

                                <li >
                                    <input type='text' name='subject' placeholder='Subject' required />

                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>


                                <div>


                                </div>

                            </ul>

                        </form>

                    </div>



                </div>

                <div className='info'>
                    Shaza Aly <br />
                    shaza.aly@gmail.Com <br />
                    +201062794773
                </div>
            </div>

            {/* Map  */}
            <div id='idmap'></div>

            <Loader type='pacman' />
        </>



    )
}
