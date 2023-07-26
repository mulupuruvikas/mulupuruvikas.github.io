import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <span className='tags top-tags'>
                <b>Last login: Wed Feb 15 09:41:27 on console <br /> vikas@personal-website@home</b>
            </span>
            <div className="text-zone" >
                <div class="css-typing">
                    <p>
                        hi!
                    </p>
                    <p>
                        it's vikas,
                    </p>
                    <p>
                        software engineer.
                    </p>
                </div>
                <h2>Undergraduate Student / University of Minnesota</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div >
        </div>
    )
}

export default Home

   