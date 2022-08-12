import Link from "next/link";

const Nav = () => {
    return (
        <div className="nav">
            <div>
                <Link href='/'>
                    <a>
                        <img 
                            src='/images/logo.svg'
                            alt='FashionLab'
                        />
                    </a>
                </Link>
            </div>
            <div>
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
        </div>
    )
}   

export default Nav;