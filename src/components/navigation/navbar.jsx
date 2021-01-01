import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "../navigation/Navbar.module.css";
import { logoutRequest, changeLogoutValue } from "../../redux/authentication/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  handleLogout = (token) => {
    console.log(token);
    this.props.logoutRequest(token);
  };

  changeValue = () => {
    this.props.changeLogoutValue(false);
  };

  render() {
    const { isLogout, token, user } = this.props;
    const { changeValue } = this;
    const { isLogin } = this.state;
    const { handleLogout } = this;

    //let user = JSON.parse(localStorage.getItem("data"))
    //let token = localStorage.getItem("jwt")

    if (isLogout) {
      localStorage.setItem("data", undefined);
      localStorage.setItem("jwt", undefined);
      changeValue();
    }

    // if (!token ) {
    //     return <Redirect to="/login" />
    //   }

    // if (!token ) {
    //     return <Redirect to="/login" />
    //   }
    //console.log(user,token)
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm  border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ padding: "0.5rem 0" }}>
                   { /* <h1 style={{"fontWeight": "800",
                               "fontSize": "26px",
                               "color": "#1ab64f",
                               "marginTop": "14px",
                               "textAlign": "left"}}>Hostal</h1>*/}
                         <img src="../logo.jpg"  style={{    "height": "59px"}}/>      
                         
                            
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li role="presentation" className="nav-item d-none d-md-block d-lg-block d-xl-block">
                {!user ? (
                  <Link to="/login" id={styles.button} className="nav-link btn  btn-sm font-weight-bold text-dark ">
                    <FontAwesomeIcon icon={faUserCircle} size="lg" />
                    <span className="pr-1">Corporate </span>
                    Login / Signup
                  </Link>
                ) : (
                  <>
                    <Link onClick={() => handleLogout(token)} id={styles.button} className="nav-link btn  btn-sm font-weight-bold text-dark">
                      <FontAwesomeIcon icon={faUserCircle} size="lg" />
                      <span className="px-1"> Logout</span>
                      <span>{user.name}</span>
                    </Link>
                  </>
                )}
              </li>

            <li role="presentation" className="nav-item d-none d-md-block d-lg-block d-xl-block">

            <li class="dropdown language-selector" style={{
                  "marginTop": "16px",
                  "fontSize": "16px",
                  "fontWeight": "700",
                  "color": "#343a40",
                  "padding": 0
            }}>
                    <i class="fa fa-globe" aria-hidden="true"></i> <span style={{"margin": "5px"}}>Language </span>  
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-close-others="true">
                      <img src="../images/flag-uk.png" />
                    </a>
                    <ul class="dropdown-menu pull-right lang_">
                      <li>
                        <a href="#">
                          <img src="../images/flag-de.png" />
                          <span>Deutsch</span>
                        </a>
                      </li>
                      <li class="active">
                        <a href="#">
                          <img src="../images/flag-uk.png" />
                          <span>Hindi</span>
                        </a>
                      </li>

                       <li class="active">
                        <a href="#">
                          <img src="../images/flag-uk.png" />
                          <span>Marathi</span>
                        </a>
                      </li>
                      <li class="active">
                        <a href="#">
                          <img src="../images/flag-uk.png" />
                          <span>Punjabi</span>
                        </a>
                      </li>
                    
                    </ul>
                  </li>
              </li>
              <li role="presentation" className="nav-item d-none d-md-block d-lg-block d-xl-block">
                {!user ? (
                  <Link to="/login" id={styles.button} className="nav-link btn  btn-sm font-weight-bold text-dark ">
                    <FontAwesomeIcon icon={faUserCircle} size="lg" />
                    <span className="pr-1"></span>
                    Login / Signup
                  </Link>
                ) : (
                  <>
                    <Link onClick={() => handleLogout(token)} id={styles.button} className="nav-link btn  btn-sm font-weight-bold text-dark">
                      <FontAwesomeIcon icon={faUserCircle} size="lg" />
                      <span className="px-1"> Logout</span>
                      <span>{user.name}</span>
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user,
  isLogout: state.auth.isLogout,
});

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: (payload) => dispatch(logoutRequest(payload)),
  changeLogoutValue: (payload) => dispatch(changeLogoutValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
