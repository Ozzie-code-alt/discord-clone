import React from "react";

const AuthLayout = ({children} : {children:React.ReactNode}) => {
    return ( 

        <div className="h-full flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;


// we Extracted Children from props then gave them a type of children.React.ReactNode