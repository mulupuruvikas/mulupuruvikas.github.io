import {
    faPython,
    faCss3,
    faGithub,
    faHtml5,
    faJava,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import OCaml from '../../assets/images/ocaml.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

    return (
        <div className="container about-page">
            <span className='tags top-tags'>
                <b>Last login: Wed Feb 15 09:41:27 on console <br /> vikas@personal-website@about-me</b>
            </span>
            <div className="text-zone">
                <div class="css-typing">
                    <p>
                        <b>about me</b>
                    </p>
                </div>
            </div>
            <div className="page-content">
                <p>
                    Hello! My name is Vikas, and I am a Computer Science Student at the University of Minnesota. <br/>I'm very interested in working in software engineering alongside
                    algorithm developers and quantitative traders, but I am open to work in any backend position! <br />In my spare time, I love to work on personal coding projects, hack, and feed my curiosity for
                    things computer related. I'm always ready to learn!
                </p>
                <p>
                    <br/>Apart from coding, I blog about music. Check out my Medium profile in the 'Contact Me' page!
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <img src={OCaml} color="#28A4D9" width="100"></img>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJava} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About