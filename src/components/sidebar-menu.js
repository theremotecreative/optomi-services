import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FaCaretDown } from 'react-icons/fa'

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
                <SubMenuToggle onClick={() => this.toggleMenu()} ><p>Company <FaCaretDown size={12}/></p></SubMenuToggle>
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
                            <a href="http://optomi.com/" target="_blank" rel="noopener noreferrer">Optomi</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://provalus.com/" target="_blank" rel="noopener noreferrer">Provalus</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="http://www.santeka.com/" target="_blank" rel="noopener noreferrer">Santeka</a>
                        </MenuItem>
                    </SubMenu>
            </MainMenu>
        );
    }
}

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
`

const MenuItem = styled.li`
    margin: 0 0 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: "Helvetica Thin";
    a {
        letter-spacing: 1px;
        font-size: 18px;
        color: #61b1e8;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
`

const SubMenuToggle = styled.div`
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 1px;
        font-size: 18px;
        color: #61b1e8;
        text-decoration: none;
        transition-duration: .3s;
        display: flex;
        align-items: center;
        &:hover {
            cursor: pointer;
            color: #fff;
        }
        svg {
            margin-left: 3px;
        }
    }
`

const SubMenu = styled.ul`
    margin: 0;
    position: relative;
    top: -15px;
    left: 0;
    opacity: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    transition-duration: .5s;
    &.menuOpen {
        left: 20px;
        opacity: 1;
        visibility: visible;
        height: 288px;
    }
`

export default SideMainMenu