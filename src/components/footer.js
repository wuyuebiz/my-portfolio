import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Footer extends Component {

  render() {
    return (
      <footer className="footr_area">
            <div className="footer_widget_area">
                <div className="container">
                    <div className="row footer_widget_inner">
                   
                        
                        <div className="col-sm-6">

                            <Link className='nav-link text-white' to='/contact'><div className="Partner">
                                    <div>
                                        <h3 className="Title is-h3">
                                            Looking for a reliable app development partner?
                                        </h3>
                                        <span className="Link is-link">Contact Me</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-6">

                            <Link className='nav-link text-white' to='/portfolio'><div className="Partner">
                                    <div>
                                        <h3 className="Title is-h3">See portfolio provided for my clients</h3>
                                        <span className="Link is-link">Portfolio page</span>
                                    </div>
                                </div>
                            </Link>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <div className="container">
                    <div className="float-sm-left">
                        <h5>
Copyright &copy;2020 All rights reserved | This website is under development using React <i className="fa fa-heart-o" aria-hidden="true"></i> by Wu Yue. Please ignore missing functions :)
</h5>
                    </div>
                </div>
            </div>
        </footer>
      )
    }
}

export default Footer