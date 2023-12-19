import './Header.css'; // Assurez-vous de créer ce fichier CSS

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="src/assets/logo_portfolio.png" alt="Logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
