import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about" className="site-title">
                    About
                </Link>

            </li>
            <li>
            <Link to="/faq" className="site-title">
                FAQ
            </Link>
            </li>
        </ul>
    </nav>
  )
}