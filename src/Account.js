import React from 'react';

const accountTypes = {
    ACTIVISION: {
        icon: '/icons/activision.png',
        name: 'Activision',
    },  
    BATTLE: {
        icon: '/icons/battle.png',
        name: 'Battle.net'
    },  
    DISCORD: {
        icon: '/icons/discord.png',
        name: 'Discord',
        style: {
            width: '1.5em',
        }
    },    
    INSTA: {
        icon: '/icons/insta.png',
        name: 'Instagram',
        style: {
            width: '1.5em',
        }
    },      
    NINTENDO: {
        icon: '/icons/nintendo.svg',
        name: 'Nintendo'
    },       
    RIOT: {
        icon: '/icons/riot.png',
        name: 'Riot Games'
    },     
    STEAM: {
        icon: '/icons/steam.png',
        name: 'Steam'
    },  
    TWITCH: {
        icon: '/icons/twitch.svg',
        name: 'Twitch',
        style: {
            width: '1.5em',
        }
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
    height: 'auto',
    width: '1.8em',
};

const iconDivStyle = {
    display: 'flex',
    height: '3em',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3em',
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
        return <span>Not found: {accType}</span>
    }

    const accT = accountTypes[accType];

    return <a href={link} target="_blank" rel="noopener noreferrer"><div style={componentStyle}>
        <div style={iconDivStyle}>
            <img style={accT.style ?? iconStyle} src={accT.icon}/>
        </div>
        <div>
            <div style={serviceStyle}>{accT.name}</div>
            <div style={accountStyle}>{user}</div>
        </div>
    </div></a>
}

export default Account;