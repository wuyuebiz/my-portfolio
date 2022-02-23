import React, {Component} from 'react'

class Mylocation extends Component {

    goToHome = (e) => {
        window.location.replace("/")
    }
    render() {
        return (
        <section className="world_map_area p_100">
            <div className="container">
                <div className="world_map_inner">
                    <img className="img-fluid" src="/static/images/world-map.gif" alt=""/>
                    
                </div>
            </div>
        </section>
        )
      }
  }
  
  export default Mylocation