/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import '../styles_base.css';
import '../styles.css';
import axios from 'axios';
import ImageLoader from './ImageLoader';

// import Cred from '../Credentials';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      imgUrlArray: [],
      loadingState: true,
    };
  }

  componentDidMount() {
    this.fetchCommand();
  }

  fetchCommand = async () => {
    const imgURL = await axios.get('https://api.unsplash.com/search/photos/?page=1&query=office&client_id=DOk-J4rWb7Qhw9IHvokMNx0sAOa_voNctL-FVOyKoHQ');
    this.setState({ imgUrlArray: imgURL.data.results, loadingState: false });
  };

  render() {
    const { loadingState } = this.state;
    const { imgUrlArray } = this.state;
    return (
      <div className="flex-column-center">
        {/* <select name="img_amount" id="img_amount">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select> */}
        <div className="flex-row-center margin-top-md width-100percent flex-wrap">
          {loadingState === true
            ? <p>Cargando</p>
            : <ImageLoader data={imgUrlArray} />}
        </div>
      </div>
    );
  }
}
