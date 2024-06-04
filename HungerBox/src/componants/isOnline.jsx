import { useState,useEffect } from "react";

const useOnline=()=>{
    let [isOnline,setIsOnline]=useState(navigator.onLine);

    const handleOnline=()=>{
        setIsOnline(true);
    }
    const handleOffline=()=>{
        setIsOnline(false);
    }

    useEffect(()=>{
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        return ()=>{
            document.removeEventListener('online',handleOnline);
            document.removeEventListener('offline',handleOffline);
        }
    },[])
    return isOnline;
}
export default useOnline;