import "./About.css";
import Avatar from "../../assets/me.jpg";

const About = () => {
    return (
        <div className="about">

            <div className="about__image-container">
                <img src={Avatar} alt="avatar" className="about__image" />
            </div>


            <div className="about__info">
                <h2 className="about__title">About the author</h2>

                <p className="about__description">
                    Name: <span className="about__name">Mohammad Alam</span>
                </p>
                <p className="about__description">
                    I am an aspiring software
                    developer skilled in full-stack technologies like JavaScript, React,
                    Node.js, and MongoDB. I’m currently sharpening my skills through
                    TripleTen’s software engineering bootcamp.
                </p>
   
                <p className="about__description">
                    I’ve built full-stack applications, learned best practices for
                    scalable development, and gained hands-on experience with modern web
                    technologies by writing write clean and efficient code.
                </p>

                <p className="about__description">
                    I love to read about new topics related tech and life.
                </p>

            </div>
        </div>
    );
};

export default About;
