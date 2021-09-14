import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p >Hotel-BookinG</p>
                </Link>
            </div>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">

                <p>Welcome <span>User</span> </p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}
