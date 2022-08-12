import Footer from "./Footer";
import Nav from "./nav";
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav/>
            <main style={styles.main}>{ children }</main>
            <Footer />
        </>
    );
}
 
export default Layout;