// Import components
import NavBar from './NavBar';

// Import custom styles
import './index.css'

export default function Header() {
  return(
    <header className="flex items-center justify-between w-full fixed top-0 __navbar-color z-20">
      <NavBar />
    </header>
  );
}