import Link from 'next/link';

const Navegacion = () => (

    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
            <Link href="/"><a className="navbar-brand">TodoBitcoin</a></Link>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/nosotros"><a className="nav-link">Nosotros</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navegacion;