import { Link } from "react-router-dom"
export default function Header() {
  const favoritIcn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </svg>
  );

  return (
    <>
      <nav
        className="navbar navbar-light mb-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand mb-0 h1">OMDB</Link>
          <Link to={'/favorites'} className="text-decoration-none text-dark">Favorites {favoritIcn}</Link>
        </div>
        
      </nav>
      
    </>
  );
}
