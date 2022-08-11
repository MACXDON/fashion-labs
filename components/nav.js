import Link from "next/link";

const Nav = () => {
    return (
        <div className="nav">
            <Link href='/'>
                <a>
                    <img 
                        src='/images/logo.jpg'
                        alt='FashionLab'
                    />
                </a>
            </Link>
            <ul>
                <li>
                    <Link href='/shopper'>
                        Shopper
                    </Link>
                </li>
                <li>
                    <Link href='/admin'>
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}   

export default Nav;