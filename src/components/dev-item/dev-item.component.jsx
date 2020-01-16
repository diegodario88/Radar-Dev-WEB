import React from 'react'
import './dev-item.styles.css'

function DevItem({ dev }) {
    return (
        <li className='dev-item'>
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className='user-info'>
                    <strong>
                        {dev.name}
                    </strong>
                    <span>{dev.techs.join(', ')}</span>
                    <p>{dev.bio}</p>
                    <a href={`https://github.com/${dev.github_username}`}>GitHub Profile</a>
                </div>
            </header>
        </li>)
}

export default DevItem