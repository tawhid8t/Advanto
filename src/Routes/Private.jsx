import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Private = ({children}) => {

    const {user, loader} = useContext(AuthContext);

    if(loader){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};
Private.propTypes ={
    children: PropTypes.object.isRequired
}

export default Private;