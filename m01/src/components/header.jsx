import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="https://t.me/joinchat/YOUR_TELEGRAM_LINK">Join Telegram</Link>
      </nav>
    </header>
  );
};

export default Header;
