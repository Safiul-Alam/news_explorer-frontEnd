import About from '../About/About';
import SearchBar from '../SearchBar/SearchBar';
import './Main.css';

const Main = () => {
    return (
        <main className='main__section'>

            <div className="main__content">
                <h1 className="main__title">What's going on in the world?</h1>
                <h3 className="main__description">
                    Find the latest news on any topic and save them in your personal
                    accout
                </h3>
                <SearchBar />
            </div>

            <div className="about__section">
                <About />
            </div>

        </main>
    )
}

export default Main
