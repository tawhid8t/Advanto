import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Private = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation()

    if(loader){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
Private.propTypes ={
    children: PropTypes.object.isRequired
}

export default Private;