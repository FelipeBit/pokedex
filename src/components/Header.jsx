import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <header data-testid="header">
            <div className="red-line"></div>
            <div className="black-line">
                <div className="button">
                    <div className="inside-button">
                        <div className="inside-button-shadow"/>
                    </div>
                </div>
            </div>
            <div className="white-line"/>
        </header>
    )
}