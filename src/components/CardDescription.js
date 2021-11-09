import React from 'react'

export default function CardDescription(props) {
    return (
        <div>
            <ul>
            {props.description.map(des => <li>des</li>)}
            </ul>
        </div>
    )
}
