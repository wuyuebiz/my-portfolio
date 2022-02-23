import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import Menu from '../components/menu'
import Footer from '../components/footer'
import SelectedImage from "../components/selectedimage";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import randomString from 'random-string'

const photos = [
    {
        src: '/static/images/portfolio/ms-portfolio/p-1-2.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/ms-p-2.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/ms-p-3.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/ms-p-4.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/ms-p-5.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/ms-p-7.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/p-8-1.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/static/images/portfolio/ms-portfolio/ms-p-9.jpg',
        width: 4,
        height: 3
    }
]

const images = [
    [
        '/static/images/portfolio/ms-portfolio/p-1-2.jpg',
        '/static/images/portfolio/ms-portfolio/p-1-3.jpg',
        '/static/images/portfolio/ms-portfolio/p-1-4.jpg',
        '/static/images/portfolio/ms-portfolio/p-1-5.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/p-2-1.jpg',
        '/static/images/portfolio/ms-portfolio/p-2-2.jpg',
        '/static/images/portfolio/ms-portfolio/p-2-3.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/ms-p-3.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/ms-p-4.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/ms-p-5.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/ms-p-7.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/p-8-1.jpg',
        '/static/images/portfolio/ms-portfolio/p-8-2.jpg',
        '/static/images/portfolio/ms-portfolio/p-8-3.jpg',
    ],
    [
        '/static/images/portfolio/ms-portfolio/ms-p-9.jpg',
    ]
];
class Portfolio extends Component {
    state = {
        photos: [],
        photoIndex: 0,
        mainIndex: 0,
        isOpen: false,
        typistKey : randomString({
            length: 8,
            numeric: false,
            letters: true,
            special: false,
            intervalId: null,
          })
    }
    constructor(props) {
        super(props);
        this.state = { photos: photos, selectAll: false };
    }
    selectPhoto = ( event, obj) => {
        this.setState({ photoIndex: 0, mainIndex: obj.index, isOpen: true });
    }

    toggleSelect = () => {
        let photos = this.state.photos.map((photo, index) => {
            return { ...photo, selected: !this.state.selectAll };
        });
        this.setState({ photos: photos, selectAll: !this.state.selectAll });
    }

    componentDidMount() {
        var intervalId = setInterval(this.timer, 11000);
       // store intervalId in the state so it can be accessed later:
       this.setState({intervalId: intervalId});
      }
    
      componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
      }
    
      timer = () => {
      // setState method is used to update the state
        this.setState({ typistKey: randomString({
          length: 8,
          numeric: false,
          letters: true,
          special: false,
        }) });
      }

    render() {
        const { photoIndex, isOpen, mainIndex } = this.state;
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
                <h1 className="Subtitle is-h1" style={{ opacity: '1'}}>
              <span className="is-display-block">My expertise are: </span><br/>
              
              <Typist key = {this.state.typistKey}>
                <span>React, Vue and Angular</span>
                <Typist.Backspace count={22} delay={300} />
                <span>Node, Django and PHP</span>
                <Typist.Backspace count={20} delay={300} />
                <span>MySQL, PostgreSQL, MongoDB</span>
                <Typist.Backspace count={26} delay={300} />
              </Typist>
            </h1>
                </div>
            </div>
        </section>
        {/* <!--================End Banner Area =================--> */}
        
        {/* <!--================Portfolio Area =================--> */}
        <section className="portfolio_area">
            
            <div className="ms_portfolio_inner">
            <Gallery
                photos={this.state.photos}
                onClick={this.selectPhoto}
                ImageComponent={SelectedImage}
                direction={"row"}
            />
            </div>
        </section>
        {/* <!--================End Portfolio Area =================--> */}

        {isOpen && (
          <Lightbox
            mainSrc={`${window.location.origin}${images[mainIndex][photoIndex]}`}
            nextSrc={`${window.location.origin}${images[mainIndex][(photoIndex + 1) % images[mainIndex].length]}`}
            prevSrc={`${window.location.origin}${images[mainIndex][(photoIndex + images[mainIndex].length - 1) % images[mainIndex].length]}`}
            onCloseRequest={() => this.setState({ isOpen: false })}
            enableZoom={false}
            imagePadding={100}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images[mainIndex].length - 1) % images[mainIndex].length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images[mainIndex].length,
              })
            }
          />
        )}

        <Footer />
        </div>
      )
    }
}

export default Portfolio
