import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"
import Avatar from "../components/avatar"

const Header = ({ avatar }) => (
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
        return location.pathname == "/" ? (
          <div>
            {/*<img src={avatar} className="logo-avatar" alt="avatar" />
             <Link to="/about/">
              blog
            </Link> */}
            <Avatar />
          </div>
        ) : (
          <div>
            <Link to="/" className="b0">
            {/*<img src={avatar} className="logo-avatar" alt="avatar" />*/}
            <Avatar />
            </Link> 
          </div>
        )
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
