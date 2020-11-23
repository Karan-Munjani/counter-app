
// when we dont have any extra methods or state property then we can use SFC: stateless functional component
// to accesss parent props we have to pass props object to it

const Nav = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Counter App
                <span className="badge badge-pill badge-secondary">{props.totalCounters}
                </span>
            </span>


        </nav>
    );
}

export default Nav;


