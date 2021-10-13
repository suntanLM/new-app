import React from 'react';

interface PropsType {
    children: React.ReactNode;
}

export default function ListView(prop: PropsType) {
    return (
        <ul>
            {
                React.Children.map(prop.children, (child) => {
                    return <li>{child}</li>
                })
            }
        </ul>
    );
}