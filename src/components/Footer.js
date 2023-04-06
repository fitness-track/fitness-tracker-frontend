export default function Footer({footerMessage}){

  return(
      footerMessage=="Error-Login-Other"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid">
              <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-danger alert-dismissible fade show shadow" role="alert">
                  <h3><i className="bi bi-x-octagon-fill"></i> <strong> Holy Guacamole!</strong></h3>
                  We're not sure how, or why, but your login attempt failed.  Try again.
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          </div>
      </nav>:
      footerMessage=="Error-Login-Credentials"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
        <div className="container-fluid">
          <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-danger alert-dismissible fade show shadow" role="alert">
              <h3><i className="bi bi-x-octagon-fill"></i> <strong> Incorrect Login</strong></h3>
              Username and/or Login are incorrect.  Try again.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </div>
      </nav>:
      footerMessage=="Success-Login"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid">
              <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-success alert-dismissible fade show shadow" role="alert">
                  <h3><i className="bi bi-check-circle-fill"></i> <strong> Logged in!</strong></h3>
                  Time to sweat, lift, run, rip, and get fit!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          </div>
      </nav>:
      footerMessage=="Error-Register-Password"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
        <div className="container-fluid">
          <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-danger alert-dismissible fade show shadow" role="alert">
              <h3><i className="bi bi-x-octagon-fill"></i> <strong> Password Length Error</strong></h3>
              Passwords must be greater or equal to 8 character.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </div>
      </nav>:
      footerMessage=="Success-Register"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid">
              <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-success alert-dismissible fade show shadow" role="alert">
                  <h3><i className="bi bi-check-circle-fill"></i> <strong> New account created!</strong></h3>
                  Write your username and password down, because we'll never let you reset it.
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          </div>
      </nav>:
      footerMessage=="Error-Register-User"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid">
              <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-warning alert-dismissible fade show shadow" role="alert">
                  <h3><i className="bi bi-exclamation-triangle-fill"></i> <strong> Username already exists</strong></h3>
                  Please <a href="/Login" className="alert-link">login</a> with that username, or pick a different username.
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          </div>
      </nav>:
      footerMessage=="Error-Register-Other"?
        <nav className="navbar sticky-bottom bg-body-tertiary">
            <div className="container-fluid">
                <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-danger alert-dismissible fade show shadow" role="alert">
                    <h3><i className="bi bi-x-octagon-fill"></i> <strong> Registration Failed</strong></h3>
                    We're not sure how, or why, but your new account failed.  Try again.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </nav>:
      footerMessage=="Success-New-Activity"?
      <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid">
              <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-success alert-dismissible fade show shadow" role="alert">
                  <h3><i className="bi bi-check-circle-fill"></i> <strong> New activity created!</strong></h3>
                  It's ready for you to add to your routine!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          </div>
      </nav>:
        footerMessage=="Error-New-Activity-Exists"?
        <nav className="navbar sticky-bottom bg-body-tertiary">
          <div className="container-fluid">
            <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-warning alert-dismissible fade show shadow" role="alert">
               <h3><i className="bi bi-exclamation-triangle-fill"></i> <strong> This activity exists!</strong></h3>
                No need to create a duplicate.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          </div>
      </nav>:
      footerMessage=="Error-New-Activity"?
        <nav className="navbar sticky-bottom bg-body-tertiary">
              <div className="container-fluid">
                  <div className="position-absolute bottom-0 start-50 translate-middle-x text-center alert alert-danger alert-dismissible fade show shadow" role="alert">
                      <h3><i className="bi bi-x-octagon-fill"></i> <strong> Error - Not Logged In</strong></h3>
                      You need to be logged in to perform this action.
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
              </div>
          </nav>:null
  )
}