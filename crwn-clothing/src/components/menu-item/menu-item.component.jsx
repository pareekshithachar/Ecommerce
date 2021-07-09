import React from 'react';
import { withRouter } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl,match}) =>(
    <div className={`${size} menu-item pointer`} onClick={()=>history.push(`${match.url}${linkUrl}`)}> 
        <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image grow'/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>     
           </div>
    </div>
)

export default withRouter(MenuItem);