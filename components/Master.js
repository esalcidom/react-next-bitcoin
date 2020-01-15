import Head from 'next/head';
import Navegacion from  './Navegacion';

const MasterPage = (props) => (

    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css" />
        </Head>
        <Navegacion />
        <div className="container m-4">
            {props.children}
        </div>
    </div>
)

export default MasterPage;