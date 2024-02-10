import { Link } from 'react-router-dom'
import './index.scss';
import Me from '../../assets/images/me.png'

const Home = () => {

    return (
        <div className="container home-page">
            <span className='tags top-tags'>
                <b>Last login: Wed Feb 15 09:41:27 on console <br /> vikas@personal-website@home</b>
            </span>
            <div className="text-zone" >
                <div class="css-typing">
                    <h1>
                        hi!
                    </h1>
                    <h1>
                        it's vikas,
                    </h1>
                    <h1>
                        software engineer.
                    </h1>
                </div>
                <h2>Undergraduate Student / University of Minnesota</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

                <div className="me">
                    <img src={Me}></img>                
                </div>
            </div >
        </div>
    )
}

export default Home

   