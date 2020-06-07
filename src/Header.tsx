import React from 'react';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;