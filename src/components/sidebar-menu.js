import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

class SideMainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    
    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        let menuName = "subMenu";
        if (this.state.isOpen) {
          menuName += ' menuOpen';
        }
        return (
            <MainMenu>
                <MenuItem>
                    <Link
                    to="/"
                    >
                    Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/services/"
                    >
                    Services
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/clients/"
                    >
                    Clients
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/candidates/"
                    >
                    Candidates
                    </Link>
                </MenuItem>
                <MenuItem>
                    <a href="http://www.optomiserves.com/">Impact</a>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/blog/"
                    >
                    Blog
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/contact/"
                    >
                    Contact
                    </Link>
                </MenuItem>
                <SubMenuToggle onClick={() => this.toggleMenu()} />
                    <SubMenu className={menuName}>
                        <MenuItem>
                            <Link
                            to="/about/"
                            >
                            About
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/awards/"
                            >
                            Awards
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/leadership/"
                            >
                            Leadership
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/news/"
                            >
                            News
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/locations/"
                            >
                            Locations
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <a href="http://optomi.com/">Optomi</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://provalus.com/">Provalus</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="http://www.santeka.com/">Santeka</a>
                        </MenuItem>
                    </SubMenu>
            </MainMenu>
        );
    }
}

const MainMenu = styled.ul``

const MenuItem = styled.li``

const SubMenuToggle = styled.div``

const SubMenu = styled.ul``

export default SideMainMenu