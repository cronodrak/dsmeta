import logo from '../../assets/img/logo.svg';
import './styles.css';
function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">

        <img src={logo} alt="DSMeta"></img>
          <h1>DSMeta</h1>
          <p>Desenvolvido por
            <a href="https://github.com/cronodrak">@cronovitor777</a>
          </p>

      </div>
    </header>
  )

}

export default Header;
