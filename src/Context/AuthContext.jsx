import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getUserProfile, onAuthChange } from "../lib/Auth";


const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       
        const cleanUp = onAuthChange( async (user)=>{
            setUser(user)

            if(user){
                try {

                    const profile = await getUserProfile(user.id);
                    setProfile(profile)
                    
                } catch (error) {
                    console.error('error',error)
                }
            }else{
                setProfile(null)
            }
            setLoading(false)
        })
        return cleanUp

    },[])

    const value = {
        user,
        profile,
        loading
    }

    return(

        
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth (){
    const context = useContext(AuthContext);
    if(context === null){
        throw new Error("useAuth must be used within a AuthProvider")
    }
    return context
}