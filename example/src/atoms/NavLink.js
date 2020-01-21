import React from 'react';

export default function NavLink(props) {
    return (
        <a
            {...props}
            className="block sm:inline-block text-blue-lighter hover:text-white mr-5"
        >
            {props.children}
        </a>
    );
}
