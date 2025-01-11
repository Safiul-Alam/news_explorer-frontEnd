import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {

    return (
        <header className="header">

            <h1 className= "header__logo" >
                NewsExplorer
            </h1>


            <Navigation />
        </header>
    )
}

export default Header
