import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({isLoggedIn}) => {

    return (
        <header className="header">

            <h1 className= "header__logo" >
                NewsExplorer
            </h1>


            <Navigation isLoggedIn = {isLoggedIn}/>
        </header>
    )
}

export default Header
