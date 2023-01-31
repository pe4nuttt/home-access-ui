import Home from '@/pages/Home';
import Tracking from '@/pages/Tracking';
import GetQr from '@/pages/GetQr';
import SignIn from '@/pages/Auth/SignIn';
import SignUp from '@/pages/Auth/SignUp';
import HowTo from '@/pages/HowTo';
import Profile from '@/pages/Profile';

const publicRoutes = [
    { id: 1, path: '/', component: Home },
    { id: 2, path: '/auth/sign-in', component: SignIn },
    { id: 3, path: '/auth/sign-up', component: SignUp },
    { id: 4, path: '/tracking', component: Tracking },
    { id: 5, path: '/get-qr', component: GetQr },
    { id: 6, path: '/how-to', component: HowTo },
    { id: 7, path: '/profile', component: Profile },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
