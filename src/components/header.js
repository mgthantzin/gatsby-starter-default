import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"
import Avatar from "../components/avatar"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 150,
        padding: `1.45rem`,
        textAlign: `center`
      }}
    >
    <Location>
      {({ location }) => {

        if (location.pathname === "/"){
          return (<div>
            <Avatar/>
          </div>)
        } else if(location.pathname.includes('/posts/')){
          return (<Link to="/blog/" className="b0">
            <Avatar alternateText="Back to Blog" />
          </Link>) 
        }else{
          return (<div>
            <Link to="/" className="b0">
              <Avatar alternateText="Back to Home Page" />
            </Link> 
          </div>)
        }        
      }}
    </Location>  
    </div>
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
