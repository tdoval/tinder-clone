import whiteLogo from '../images/tinder-white-logo2.png';
import colorLogo from '../images/tinder-color-logo.png';

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={minimal ? colorLogo : whiteLogo}
          alt='logo'
        />
      </div>

      {!authToken && !minimal && (
        <button
          className='nav-button'
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
