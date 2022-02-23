import React, {Component} from 'react'
import MainSlider from '../components/slider'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Getintouch from '../components/getintouch'
import MyLocation from '../components/mylocation'
import history from '../history'
import {Link} from 'react-router-dom'
import Slider from "react-slick";

class HomePage extends Component {

    goToPortfolio = () => {
        history.push('/portfolio')
    }
    render() {
        
        var settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className='Container'>
            <Menu />
            <MainSlider />
            <div className='icon-scroll'> </div>
            {/* <!--================Feature Area =================--> */}
            <section className="feature_area">
            
                <div className="container">
                    <div className="c_title">
                    
                        <img src="/static/images/icon/title-icon.png" alt=""/>
                        
                        <h6>Discover the features</h6>
                        <h2>WHAT I OFFER</h2>
                    </div>
                    <div className="row feature_inner">
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="f_icon">
                                    <img src="/static/images/icon/f-icon-1.png" alt=""/>
                                </div>
                                <h4>Front-end Development</h4>
                                <p>Use up-to-date technology stack, including: React, Vue, jQuery... </p>
                                <ul>
                                    <li>Responsive layout for any device</li>
                                    <li>Cross browser compatibility</li>
                                    <li>Pixel perfect coding stays sharp on any screen</li>
                                    <li>SEO friendly code organization</li>
                                    <li>Highly organized code structure</li>
                                </ul>
                                <Link className="more_btn" to="/aboutme">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="f_icon">
                                    <img src="/static/images/icon/f-icon-2.png" alt=""/>
                                </div>
                                <h4>Back-end Development</h4>
                                <p>My Backend skills are Node, Python(django), PHP(Laravel, CodeIgnitor</p>
                                <ul>
                                    <li>NO spaghetti code</li>
                                    <li>Keeps to security and user data protection standards</li>
                                    <li>Builds Agile &amp; Stable server-side software</li>
                                    <li>Provides well-documented code</li>
                                    <li>Troubleshoots and debugs applications</li>
                                    <li>Follows emerging technologies</li>
                                </ul>
                                <Link className="more_btn" to="/aboutme">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="f_icon">
                                    <img src="/static/images/icon/f-icon-3.png" alt=""/>
                                </div>
                                <h4>DevOps & Cloud</h4>
                                <p>Familiar AWS, Azure, VPS, Google Cloud</p>
                                <ul>
                                    <li>Sets up the environment</li>
                                    <li>Integrates cloud solutions</li>
                                    <li>Executes load testing</li>
                                    <li>Sets up a scalable server infrastructure</li>
                                    <li>Handles DevOps</li>
                                    <li>Advises on hosting and hosting services</li>
                                </ul>
                                <Link className="more_btn" to="/aboutme">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================End Feature Area =================--> */}
            
            {/* <!--================The best slider Area =================--> */}
            <section className="best_3d_area">
                <div className="left_3d">
                
                    <div className="shap_slider_inner  owl-carousel">
                        
                        
                    </div>
                </div>
                <div className="right_text">
                    <div className="right_text_inner">
                        <div className="text_3d">
                            <div className="l_title">
                                <img src="/static/images/icon/title-icon.png" alt=""/>
                                <h6>Discover the features</h6>
                                <h2>I stand tall in front of challenge</h2>
                            </div>
                            <div className="about-content-box-content-text">
                                <p><b><i className="fa fa-pinterest"></i> Customer is First :</b> Total commitment to our customers. To ensure that we achieve their business objectives and surpass their quality and service expectations fulfilled.</p>
                                <p><b><i className="fa fa-pinterest"></i> Honesty :</b> Fairness towards transparency of all process and at all levels.</p>
                                <p><b><i className="fa fa-pinterest"></i> Team Work :</b> Value each &amp; every one to work as a team for achieving the best.</p>
                                <p><b><i className="fa fa-pinterest"></i> Innovation :</b> To be a leader and always strive for new advance steps further.</p>
                                <p><b><i className="fa fa-pinterest"></i> Pursuit of Excellence:</b> A power to constantly improve ourselves, our people, our services and to deliver the best.</p>
                            </div>
                        </div>
                        <div className="shap_mobile">
                            <img src="/static/images/macbook.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================End The best slider Area =================--> */}
            
            {/* <!--================Team People Area =================--> */}
            <section className="team_people_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="team_people_text">
                                <div className="l_title">
                                    <img src="/static/images/icon/title-icon.png" alt=""/>
                                    <h6>Discover the features</h6>
                                    <h2>Technologies I use</h2>
                                </div>
                                <p>I develop web applications using up-to-date technology stack, which includes: React, Vue, Node(express), Python(Django), PHP(Laravel) and other tools - I keep learning and evolving together with the industry, adding new tools to my toolbox whenever I can.</p>
                                <ul>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/aboutme">My CV</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team_img_inner">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item" onClick={e => this.goToPortfolio()}>
                                            <img src="/static/images/portfolio/ms-portfolio/p-1-2.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6" onClick={e => this.goToPortfolio()}>
                                        <div className="team_img_item">
                                            <img src="/static/images/portfolio/ms-portfolio/ms-p-2.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item" onClick={e => this.goToPortfolio()}>
                                            <img src="/static/images/portfolio/ms-portfolio/ms-p-3.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item" onClick={e => this.goToPortfolio()}>
                                            <img src="/static/images/portfolio/ms-portfolio/ms-p-4.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================End Team People Area =================--> */}
            
            {/* <!--================Get in Touch Area =================--> */}
            <Getintouch />
            {/* <!--================End Get in Touch Area =================--> */}
            
            {/* <!--================Map Area =================--> */}
            <MyLocation />
            {/* <!--================End Map Area =================--> */}
            
            <Footer />
            </div>
        )
    }
}

export default HomePage
