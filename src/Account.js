import React from 'react';

const accountTypes = {
    BATTLE: {
        icon: '/icons/battle.png',
        name: 'Battle.net'
    },     
    RIOT: {
        icon: '/icons/riot.png',
        name: 'Riot Games'
    },      
    NINTENDO: {
        icon: '/icons/nintendo.svg',
        name: 'Nintendo'
    },     
    STEAM: {
        icon: '/icons/steam.png',
        name: 'Steam'
    },  
    TWITCH: {
        icon: '/icons/twitch.svg',
        name: 'Twitch'
    } 
}

const componentStyle = {
    background: '#1d2026',
    borderRadius: '1.5em',
    display: 'flex',
    height: '3em',
    marginTop: '0.5em',
    width: '15em',
};

const iconStyle = {
    width: '1.8em',
    padding: '0.6em'
};

const serviceStyle = {
    color: '#fff',
    fontSize: '1.2em',
    fontWeight: '600',
    lineHeight: 1,
    marginTop: '0.2em'
};

const accountStyle = {
    color: '#a3a7af',
};

function Account({accType, link, user}) {
    if(accountTypes[accType] === undefined) {
        return <span>Tipo nao encontrado: {accType}</span>
    }
    return <a href={link} target="_blank" rel="noopener noreferrer"><div style={componentStyle}>
        <div>
            <img style={iconStyle} src={accountTypes[accType].icon}/>
        </div>
        <div>
            <div style={serviceStyle}>{accountTypes[accType].name}</div>
            <div style={accountStyle}>{user}</div>
        </div>
    </div></a>
}

export default Account;