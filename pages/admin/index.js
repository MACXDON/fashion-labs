import Link from 'next/link';
import Transactions from './transactions';
import Products from './Products';
import styles from '../../styles/Home.module.css'

const Admin = (props) => {
    const adminNavCategories = ['TRANSACTIONS', 'PRODUCTS'];

    return (
        <div className={styles.container} id="admin-container" style={{ display: props.display }}>
            <div className='admin-container-nav'>
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
        </div>
    )
}

export default Admin;