import React from "react"
export default function Badges({children,className,varient}){
    
    return (
       <>
        <div>
            <div className="Square"><button className={className}>{children}</button></div>
            <div className="pill"><button className={className}>{children}</button></div>
        </div>
       </>
    )
}