import React, {Component} from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import MyLocation from '../components/mylocation'
import ContactForm from '../components/contactform'
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
                        <h2>Contact</h2>
                        <p>Get in touch</p>
                    </div>
                </div>
            </section>
            {/* <!--================End Banner Area =================--> */}
            
            {/* <!--================Get in Touch Area =================--> */}
            <section className="get_in_touch_area p_100">
                <div className="container">
                    <ContactForm/>
                </div>
            </section>
            {/* <!--================End Get in Touch Area =================--> */}
            
            <MyLocation />
            
            <Footer />
            
            
            {/* <!--================Contact Success and Error message Area =================--> */}
            <div id="success" className="modal modal-message fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fa fa-close"></i>
                            </button>
                            <h2>Thank you</h2>
                            <p>Your message is successfully sent...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modals error --> */}

            <div id="error" className="modal modal-message fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fa fa-close"></i>
                            </button>
                            <h2>Sorry !</h2>
                            <p> Something went wrong </p>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!--================End Contact Success and Error message Area =================--> */}
            </div>
        )
    }
}

export default Contact