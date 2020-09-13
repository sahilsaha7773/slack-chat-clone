import React from 'react';
import {Avatar} from '@material-ui/core';
import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import './Header.css';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div class="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTime/>
            </div>
            <div class="header__search">
                <Search/>
                <input placeholder="Search react slack..."/>
            </div>
            <div class="header__right">
                <HelpOutline/>
            </div>
        </div>
    )
}

export default Header
