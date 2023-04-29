import Link from 'next/link';

function Navbar() {

    return (
        <>  
            <div className="div-navbar">
                <Link href={"/todos"}>Todos</Link>
                <Link href={"/homepage"}>Homepage</Link>
            </div>
        </>
    )
}

export default Navbar;