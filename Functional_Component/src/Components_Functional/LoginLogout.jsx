import { useState } from "react"

function LoginLogout() {
    const[isLogin, setIsLogin] = useState(true);
    console.log(isLogin);
    return(
        <div>
            <h1>{isLogin?"This is Login Page":"This is Logout Page"}</h1>
            <button onClick={()=>setIsLogin(!isLogin)}>
                {isLogin?"LogOut":"LogIn"}
            </button>
        </div>
    )
}
export default LoginLogout