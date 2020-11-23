
// when we dont have any extra methods or state property then we can use SFC: stateless functional component
// to accesss parent props we have to pass props object to it


//Desturcting Arguements: When We have many references to props then instead of using props.(propertyName) we can destructre Arguements



const Nav = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Counter App
                <span className="badge badge-pill badge-secondary">{totalCounters}
                </span>
            </span>


        </nav>
    );
}

export default Nav;


