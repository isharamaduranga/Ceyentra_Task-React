import {useState , useEffect, useContext , createContext} from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useState({
        token:""
    });

    useEffect(() => {
        const data = localStorage.getItem('token');
        if (data){
            setAuth({
                ...auth,
                token: data,
            });
        }
        //eslint-disable-next-line
    }, []);
    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

//custom hook
const useAuth = () => useContext(AuthContext)

export {useAuth,AuthProvider}