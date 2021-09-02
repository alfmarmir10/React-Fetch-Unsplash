/* eslint-disable react/prop-types */
import React from 'react';

function Img({
  link, name, url, user,
}) {
  return (
    <div className="card flex-column-center">
      <img src={url} alt="Unsplash Pic" className="card-img" />
      <a href={user} className="img-user-name font-weight-bold font-size-sm">{name}</a>
      <a href={link} className="font-weight-light font-size-sm">See on Unsplash</a>
    </div>
  );
}

export default Img;
