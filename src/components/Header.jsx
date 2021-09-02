/* eslint-disable react/react-in-jsx-scope */
import '../styles_base.css';
import '../styles.css';
import headerLogo from '../assets/img/react.svg';

function Header() {
  return (
    <div className="header width-100percent flex-row-center">
      <img src={headerLogo} alt="" className="header-icon" />
      <p className="header-title font-weight-bold">React Practice</p>
    </div>
  );
}

export default Header;
