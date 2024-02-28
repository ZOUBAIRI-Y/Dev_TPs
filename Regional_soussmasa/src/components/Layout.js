import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'inscription'}>Inscription</Link>
                </li>
                <li>
                    <Link to={'articles'}>Articles</Link>
                </li>
                <li>
                    <Link to={'contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
}