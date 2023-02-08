import React from 'react';

interface IProps {
    name: string
}

const Header = (props: IProps) => {
    const {name} = props
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Header;
