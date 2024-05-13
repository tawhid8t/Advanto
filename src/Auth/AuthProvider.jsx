import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user , setUser] = useState([])


    const SignUpUser = (email , password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    
    }

    const AuthInfo = {user, SignUpUser}
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;