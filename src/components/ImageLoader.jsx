/* eslint-disable react/react-in-jsx-scope */
import Img from './Img';

function ImageLoader(props) {
  const results = props.data;
  let imgs;
  if (results.length > 0) {
    imgs = results.map((img) => (
      <Img
        url={img.urls.thumb}
        user={img.user.links.html}
        name={img.user.name}
        link={img.links.html}
        key={img.id}
      />
    ));
  } else {
    imgs = '';
  }
  return imgs;
}

export default ImageLoader;
