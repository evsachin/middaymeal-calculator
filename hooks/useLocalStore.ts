"use client"

import { useEffect, useState } from "react"

export default function useLocalStore(key:string, defaultvalue:any){
    const [value, setValue]  = useState(defaultvalue)
    useEffect(()=>{
        const saved = localStorage.getItem(key);
        if(saved) setValue(JSON.parse(saved))
    },[])

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])
    return [value, setValue] as const;
}