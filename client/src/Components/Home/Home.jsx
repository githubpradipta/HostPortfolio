import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/pro.JPG'
import HashLoader from "react-spinners/HashLoader";
import gif from '../../assets/images/webgif.gif'
import gsap from 'gsap'
import TextTypeAnimation from '../../UI/TextTypeAnimation';


export default function Home() {
    const [loading, setLoading] = useState(false);

    const title = gsap.utils.toArray('p');
    console.log(title);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    },[])


    return (
        <div className="con">
            <div className='container home_page'>
                {
                    loading ?
                        <div className="loader">
                            <HashLoader
                                color={"#4d94bb"}
                                loading={loading}
                                size={50}
                            />
                        </div>
                        :
                        <>
                            <div className="bgtext"><h1>PRADIPTA</h1></div>
                            <div className="text_area">
                                <div className="left">
                                    <h1>Hello👋
                                        <br /> 
                                        <span>I'm</span> Pradipta Banerjee
                                        <br />
                                        <TextTypeAnimation sequence={['Front-end Development',1000,'Back-end Development',1000,'DSA',1000]}/>
                                    </h1>
                                </div>
                                <div className="right">
                                    <h2>
                                        <div className="first skills">Front-end Developer</div> | &nbsp;
                                        <div className="second skills">Back-end Developer</div> | &nbsp;
                                        <div className="third skills">Problem solver(DSA)</div>
                                    </h2>

                                    <div className="contact-div">
                                        <Link to='/contact' className='contact-btn' >CONTACT ME</Link>
                                        <Link to='/projects' className='contact-btn filled' >SEE MY PROJECTS</Link>

                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img src={gif} alt="Profile" />

                            </div>

            </>
            }
            </div>
        </div>
    )
}
