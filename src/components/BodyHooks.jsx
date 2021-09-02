/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import '../styles_base.css';
import '../styles.css';
import axios from 'axios';
import ImageLoader from './ImageLoader';

function BodyHooks() {
  const [imgUrlArray, setImgUrlArray] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [loadingState, setLoadingState] = useState();

  async function fetchImgs() {
    setLoadingState(true);
    const imgURL = await axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${searchString}&client_id=DOk-J4rWb7Qhw9IHvokMNx0sAOa_voNctL-FVOyKoHQ`);
    setImgUrlArray(imgURL.data.results);
    setLoadingState(false);
  }
  useEffect(async () => {
    fetchImgs();
  }, []);

  function handleSearch(event) {
    setSearchString(event.target.value);
  }

  return (
    <div className="flex-column-center">
      <input type="text" onKeyDown={handleSearch} onBlur={fetchImgs} />
      <div className="flex-row-center margin-top-md width-100percent flex-wrap">
        {loadingState === true
          ? <p>Cargando</p>
          : <ImageLoader data={imgUrlArray} />}
      </div>
    </div>
  );
}

export default BodyHooks;
