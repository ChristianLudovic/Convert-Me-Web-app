export function Header (){
    return(
        <div className="header-content">
            <div className="logo">
            <   img src="../src/assets/logo.svg" alt="" />
            </div>
            <div className="loginButton-language">
                <div className="lang">
                    <img src="../src/assets/LR.svg" alt="" />
                    <span>English</span>
                </div>
                <button className="login-button">Login</button>
            </div>
        </div>
    )
} 