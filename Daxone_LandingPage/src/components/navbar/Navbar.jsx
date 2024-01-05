// import NavItems from './NavItems';
// import NavSearch from './NavSearch';
import NavItems from "./NavItems";
import NavSearch from './NavSearch'
import Logo from "./Logo";

const Navbar = () => {
    return(
        <div className="Navbar">
            <Logo/>
            <NavItems />
            <NavSearch />
        </div>

    )
}

export default Navbar;
