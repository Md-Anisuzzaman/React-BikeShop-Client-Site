import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, setRurl } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const redirect_url = location.pathname || '/home';
        //const redirect_url = '/home';
        //console.log(redirect_url, location, user);
        setRurl(redirect_url);
    }, [])



    //console.log(user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default PrivateRoute;