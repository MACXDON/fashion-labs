import Link from 'next/link';
import Transactions from './transactions';
import Products from './Products';

const Admin = (props) => {
    const adminNavCategories = ['Transactions', 'Products'];

    return (
        <div className="admin-container" style={{ display: props.display }}>
            <ul>
                {
                    adminNavCategories.map((category, index) => {
                        return (
                            <li key={index}>
                                <Link href={`admin/${category.toLowerCase()}`}><a>{category}</ a></ Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Admin;