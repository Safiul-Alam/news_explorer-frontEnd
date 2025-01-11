import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {

    return (
        <header className="header">

            <div className="header__bar">
                <h1 className="header__logo"> NewsExplorer </h1>
            </div>


            <Navigation />
        </header>
    )
}

export default Header
