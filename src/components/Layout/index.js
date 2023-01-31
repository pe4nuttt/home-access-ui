import classNames from 'classnames/bind';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import AccessControlModals from './components/AccessControlModals';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className={cx('body')}>{children}</div>
            {/* <Footer /> */}
            {/* <AccessControlModals></AccessControlModals> */}
        </div>
    );
}

export default Layout;
