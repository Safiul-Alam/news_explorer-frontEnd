import './About.css';
import Avatar from "../images/sunflower_profile_pic.avif";

const About = () => {
    return (
        <div className='about__section'>
            <div>
                <img src={Avatar} alt="avatar" className='about__avatar' />
            </div>

            <div className="about__user">
                <h2 className="about__title">About the auther</h2>
                <p>Name: <span className='about__name'>Mohammad Alam</span></p>
                <p>Profession: Junior Software Engineer</p>
                <p>During my time at TripleTen, I had the opportunity to deepen my knowledge of full-stack development.</p>
                <p></p>
            </div>

        </div>
    )
}

export default About
