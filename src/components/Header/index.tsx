// Import components
import NavBar from './NavBar';

// Import custom styles
import './index.css'

export default function Header() {
  return(
    <header className="flex items-center justify-between __header-color">
      <NavBar />
    </header>
  );
}