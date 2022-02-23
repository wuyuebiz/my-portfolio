import React, { Component } from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Particles from 'react-particles-js';
class Contact extends Component {
    render() {
        return (
            <div className='Container'>
                <Menu />

                {/* <!--================Banner Area =================--> */}
                <section className="banner_area">
                    <div className="particle">
                        <Particles
                        params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
                    </div>
                    <div className="container">
                        <div className="banner_inner_text">
                        </div>
                    </div>
                </section>


                <div className="timeline  timeline-mine">

                    <header className="header">


                        <div id="form-section-PersonalInfo" className="header-edit-section header-edit-section-1">

                            <div className="display-only">
                                <div className="avatar-wrapper">
                                    <div className="avatar">
                                        <img src="static/images/me.png" alt="" width='200px' />
                                    </div>
                                </div>

                                <div className="name">
                                    <h4>Wu Yue</h4>
                                </div>

                                <div className="job has-tooltip">
                                    Full-stack Web Developer
                                </div>

                                <div className="meta g-column jc-center _gutters">
                                    <div className="g-row ff-row-wrap jc-center _gutters-8">
                                        <div className="g-col fl-none g-row _gutters">
                                            <span className="g-col ai-center meta-icon"><svg aria-hidden="true" className="svg-icon iconLocation" width="18" height="18" viewBox="0 0 18 18"><path d="M2 6.38C2 9.91 8.1 17.7 8.1 17.7c.22.29.58.29.8 0 0 0 6.1-7.8 6.1-11.32A6.44 6.44 0 0 0 8.5 0 6.44 6.44 0 0 0 2 6.38zm9.25.12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0z"></path></svg></span>
                                            <span className="g-col">Shenyang, Liaoning</span>
                                        </div>

                                        <div className="g-col fl-none g-row _gutters">
                                            <span className="g-col ai-center meta-icon"><svg aria-hidden="true" className="svg-icon iconGitHub" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1z"></path></svg></span>
                                            <span className="g-col placeholder-text">GitHub</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div id="form-section-PersonalStatementAndTools" className="header-edit-section header-edit-section-2">

                            <div className="display-only">

                                <div className="description">
                                    <div className="description">
                                        <span className="description-content-full"><p>My professional career is mainly in Python, Node and Javascript. I have 8+ years experience. I mostly covered all the frameworks that run on it, but my favorites are Django, Flask, Node/express, React and Vue.
                My last 3 years, I was the Technical Lead developer, in Silver Bay Seefoods, LLC.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="form-section-TechStack" className="header-edit-section header-edit-section-3">

                            <div className="display-only">
                                <div className="user-technologies">
                                    <div className="timeline-item-tags">
                                        <span className="post-tag">amazon-web-services</span>
                                        <span className="post-tag">angular</span>
                                        <span className="post-tag">azure</span>
                                        <span className="post-tag">django</span>
                                        <span className="post-tag">firebase</span>
                                        <span className="post-tag">flask</span>
                                        <span className="post-tag">javascript</span>
                                        <span className="post-tag">laravel</span>
                                        <span className="post-tag">php</span>
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">reactjs</span>
                                        <span className="post-tag">vue.js</span>
                                    </div>
                                    <div className="tag-wrapper">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </header>


                    <div className="timeline-feed">

                        <div className="timeline-line"></div>


                        <div id="item-7186747" className="timeline-item job" data-order-by="20190815-002-0007186747">


                            <header>
                                <span className="timeline-item-type">Position</span>

                                <span className="timeline-item-date">
                                    Feb 2020 → Current
                                <span>(3 mos)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        Full Stack Software Developer, Silver Bay Seefoods, LLC - Part-time
                                
                                    </div>

                                    <div className="timeline-item-tags g-col g-row">
                                        <span className="post-tag">reactjs</span>
                                        <span className="post-tag">vue.js</span>
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">django</span>
                                        <span className="post-tag">node</span>
                                        <span className="post-tag">php</span>
                                        <span className="post-tag">laravel</span>
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>Developing and maintaining web applications</p></span>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div id="item-7186737" className="timeline-item job" data-order-by="20190501-002-0007186737">

                            <header>
                                <span className="timeline-item-type">Position</span>


                                <span className="timeline-item-date">Oct 2019 → Feb 2020
                                    <span>(5 mos)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        Student Software Development, Coding Dojo
                                    
                                    </div>

                                    <div className="timeline-item-tags g-col g-row">
                                        <span className="post-tag">reactjs</span>
                                        <span className="post-tag">vue.js</span>
                                        <span className="post-tag">javascript</span>
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">node</span>
                                        <span className="post-tag">postgresql</span>
                                        <span className="post-tag">amazon-web-services</span>
                                        <span className="post-tag">lambda</span>
                                        <span className="post-tag">amazon-s3</span>
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>Spent 70+ hours per week mastering curriculum, learning data structures and algorithms.
                                            Worked individually and in team environments to turn ideas into products using various technologies learned from the program.
                                            </p>
                                            </span>

                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="item-7186737" className="timeline-item job" data-order-by="20190501-002-0007186737">

                            <header>
                                <span className="timeline-item-type">Position</span>


                                <span className="timeline-item-date">Apr 2019 → Sep 2019
                                    <span>(6 mos)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        Information Technology Specialist, Silver Bay Seafoods, LLC
                                    
                                    </div>

                                    <div className="timeline-item-tags g-col g-row">
                                        <span className="post-tag">reactjs</span>
                                        <span className="post-tag">javascript</span>
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">node</span>
                                        <span className="post-tag">postgresql</span>
                                        <span className="post-tag">amazon-web-services</span>
                                        <span className="post-tag">lambda</span>
                                        <span className="post-tag">amazon-s3</span>
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>Company job website
                                            </p>
                                            </span>

                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="item-7186737" className="timeline-item job" data-order-by="20190501-002-0007186737">

                            <header>
                                <span className="timeline-item-type">Position</span>


                                <span className="timeline-item-date">Sep 2018 → Mar 2019
                                    <span>(7 mos)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        Autocard Designer, GLOBAL SANCHEZ, INC
                                    
                                    </div>

                                    <div className="timeline-item-tags g-col g-row">
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">node</span>
                                        <span className="post-tag">Autocard</span>
                                        <span className="post-tag">autodesk</span>
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>• Conducted basic interpretations of drawings, codes, and other similar materials.
• Performed Revit and AutoCAD design for the electrical discipline using knowledge of relevant software programs.
•••
                                            </p>
                                            </span>

                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="item-7186737" className="timeline-item job" data-order-by="20190501-002-0007186737">

                            <header>
                                <span className="timeline-item-type">Position</span>


                                <span className="timeline-item-date">May 2018 → Sep 2018
                                    <span>(5 mos)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        Information Technology Specialist, Silver Bay Seafoods, LLC
                                    
                                    </div>

                                    <div className="timeline-item-tags g-col g-row">
                                        <span className="post-tag">reactjs</span>
                                        <span className="post-tag">javascript</span>
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">node</span>
                                        <span className="post-tag">postgresql</span>
                                        <span className="post-tag">amazon-web-services</span>
                                        <span className="post-tag">lambda</span>
                                        <span className="post-tag">amazon-s3</span>
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>• Conducted basic interpretations of drawings, codes, and other similar materials.
• Performed Revit and AutoCAD design for the electrical discipline using knowledge of relevant software programs.
•••
                                            </p>
                                            </span>

                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="item-7186737" className="timeline-item job" data-order-by="20190501-002-0007186737">

                            <header>
                                <span className="timeline-item-type">Position</span>


                                <span className="timeline-item-date">2013 → 2018
                                    <span>(5 years)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>Worked in the several companies•••
                                            </p>
                                            </span>

                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="item-7186737" className="timeline-item job" data-order-by="20190501-002-0007186737">

                            <header>
                                <span className="timeline-item-type">Position</span>


                                <span className="timeline-item-date">Sep 2012 → Apr 2013
                                    <span>(8 mos)</span>
                                </span>
                            </header>

                            <div className="timeline-item-content with-description">

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        Python Developer, Ciklum
                                    
                                    </div>

                                    <div className="timeline-item-tags g-col g-row">
                                        <span className="post-tag">reactjs</span>
                                        <span className="post-tag">javascript</span>
                                        <span className="post-tag">python</span>
                                        <span className="post-tag">node</span>
                                        <span className="post-tag">postgresql</span>
                                        <span className="post-tag">amazon-web-services</span>
                                        <span className="post-tag">lambda</span>
                                        <span className="post-tag">amazon-s3</span>
                                    </div>


                                    <div className="timeline-item-paragraph">
                                        <div className="description">
                                            <span className="description-content-full" ><p>• Helped with Back End development of new functionality.<br/>
• Code and Architectural review. Transforming requirements to a set of various types of tests.<br/>
• Communicated with PMs, developers, architects, QA engineers and other colleagues and stakeholders.
                                            </p>
                                            </span>

                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>
                        
                        <div id="item-7186724" className="timeline-item education" data-order-by="20060301-000-0007186724">


                            <header>
                                <span className="timeline-item-type">Education</span>
                                <span className="timeline-item-date">
                                    2009 - 2013
                                </span>
                            </header>

                            <div className="timeline-item-content ">

                                <div className="img logo">
                                    <img src="static/images/university.jpeg" alt="" width='200px' />
                                </div>

                                <div className="timeline-item-text">

                                    <div className="timeline-item-title">
                                        <a href="#" rel="nofollow">
                                            Bachelor's degree, Computer Science | Vinnytsia National Technical University
                                        </a>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                {/* <!--================End We Are Company Area =================--> */}

                {/* <!--================End We Are Company Area =================--> */}
                <section className="talk_area">
                    <div className="container">
                        <div className="talk_text">
                            <h4>Are you ready to talk?</h4>
                        </div>
                    </div>
                </section>
                {/* <!--================End We Are Company Area =================--> */}

                <Footer />

            </div>
        )
    }
}

export default Contact