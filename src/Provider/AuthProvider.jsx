import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    console.log(user)
    
    const [loading, setLoading] = useState(true)
    
    const token = localStorage.getItem('token')

    useEffect(() => {
        
        // console.log('>>>>>>token>>>>>>',token)
        if (token) {
        
          const decodedToken = jwtDecode(token);
          console.log('>>>>>>>>>>>',decodedToken);
      
          setUser(decodedToken.username);
          setUserId(decodedToken.id);
          setRole(decodedToken.role);
          setLoading(false);
          // navigate(from, { replace: true });
      } 
    },[token])

    
    
    // useEffect(() => {
    //     fetch('',{
    //         method: 'GET',
    //         headers:{
    //           'Authorization': token,
    //           'content-type': 'application/json',
    //         }
    //       })
    //       .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
          
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setUser(null)
    //       setLoading(false);
    //       localStorage.removeItem('token');
    //     });
    // }, [token])


    
    const authInfo = {
        user,
        setUser,
        userId,
        setUserId,
        role,
        setRole,
        loading,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;