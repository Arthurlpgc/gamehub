import React from 'react';
import Account from './Account';

const style = {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center', 
    color: '#fff',
    fontWeight: 400, 
    width: '90%', 
    padding: '5%'
};

const nameStyle =  {
    fontSize: '3em',
};

const imageStyle = {
    borderRadius: '50%',
    width: '15em',
};

const bioStyle = {
    fontSize: '1.2em',
    color: '#a3a7af'
}

function Profile({pic, name, age, bio, accounts}) {
    return <div style={style}>
            <img src={pic} style={imageStyle}/>
            <span style={nameStyle}>{name}</span>
            <span style={bioStyle}>{age}, {bio}</span>
            <div style={{fontSize: '1.2em'}}>
                {accounts.map(account => <Account key={account.accType} {...account}/>)}
            </div>
    </div>;
}

export default Profile;