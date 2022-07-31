import Link from "next/link";

const Nav = () => {
    return (
        <>
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
        </>
    )
}   

export default Nav;