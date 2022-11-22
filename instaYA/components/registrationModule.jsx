import React from 'react'

export const registrationModule = () => {
  return (
    <body>
    <div className="registration-form">
        <form>
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="username" placeholder="Username"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control item" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date"/>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account">Create Account</button>
            </div>
        </form>
        <div className="social-media">
            <h5>Sign up with social media</h5>
            <div className="social-icons">
                <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
                <a href="#"><i className="icon-social-google" title="Google"></i></a>
                <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
  )
}
