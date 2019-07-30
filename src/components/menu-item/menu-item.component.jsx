import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h1 className='subtitle'>SHOP NOW</h1>
    </div>
  </div>
);

// withRouter is high component, it's take component is argument and return component with some more feature
// withRouter(MenuItem) the MenuItem can access to history now
export default withRouter(MenuItem);
