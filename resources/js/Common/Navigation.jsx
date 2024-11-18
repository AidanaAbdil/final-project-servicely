import Searchbar from "../Components/Searchbar";

function Navigation() {
    return (
        <nav>
            <p>Logo</p>
            <Searchbar />
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Catalog</a>
            <a href="">Login</a>
            <a href="">Register</a>
        </nav>
    );
}

export default Navigation;
