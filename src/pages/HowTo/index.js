import classNames from 'classnames/bind';

import styles from './HowTo.module.scss';
import Layout from '@/components/Layout';

const cx = classNames.bind(styles);

function HowTo() {
    return (
        <Layout>
            <h1>How To</h1>
        </Layout>
    );
}

export default HowTo;
