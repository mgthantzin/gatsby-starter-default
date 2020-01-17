import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"

const Header = ({ avatar }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
        padding: `1.45rem`,
        textAlign: `center`
      }}
    >
    <Location>
      {({ location }) => {
        return location.pathname == "/" ? (
          <div>
            <img src={avatar} className="logo-avatar" alt="avatar" />
            {/* <Link to="/about/">
              blog
            </Link> */}
          </div>
        ) : (
          <div>
            <Link to="/">
            <img src={avatar} className="logo-avatar" alt="avatar" />
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
