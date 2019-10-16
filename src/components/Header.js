import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="wrapper">
                <nav className="navbar flex-between">
                    <a className="logo" href='/'><span>GitHub</span>Jobs</a>
                    <label htmlFor="toggle">
                        <div className="menu">MENU</div>
                    </label>
                    <input type="checkbox" id="toggle"></input>
                    <ul className="nav-list flex-between">
                        <li className="nav-item">
                            <a href="#">Bookmarks</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contribute</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;