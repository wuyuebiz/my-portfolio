import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {

    render() {
        return (
            <header className="main_menu_area">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Wu Yue</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link className='nav-link' to='/'>Home</Link></li>
                            <li className="nav-item">
                            <Link className='nav-link' to='/aboutme'>My CV</Link></li>
                            <li className="nav-item">
                            <Link className='nav-link' to='/portfolio'>Portfolio</Link></li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Menu