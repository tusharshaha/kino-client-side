import { useRouter } from 'next/router';
import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loader from '../Shared/Loader';

const PrivateRoute = (Component) => {
    return function Protected(props) {
        const { user, loading } = useAuth();
        const router = useRouter();
        if (loading) {
            return <Loader />
        }
        if (!user?.email) {
            router.replace('/my_account')
            return <Loader />
        }
        return <Component {...props} />
    }
};

export default PrivateRoute;