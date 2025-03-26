import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <header className="header">
                <div className="left-content">
                    <Link to="/">home</Link>
                </div>

                <div className="right-content">
                    <Link to="/projects">projects</Link>
                    <Link to="/blog">blog</Link>
                </div>
            </header>
        </>
    );
}

export default Navbar;