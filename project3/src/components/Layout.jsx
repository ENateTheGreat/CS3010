import { Link, Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
      <header>
        <h1 id="title">Tokay Talk</h1>
        <nav>
          <div id='nav-buttons'>
            <Link to='/' className='nav-button'>Home</Link>
            {!props.loggedIn ? (
              <>
                <Link to='/registration' className='nav-button' >Register</Link>
                <Link to='/login' className='nav-button'>Login</Link>
              </>
            ) : (
              <>
                <Link to='/account' className='nav-button'>Account</Link>
                <Link to='/' className='nav-button' onClick={props.handleLogin}>Logout</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <div style={{height: '100%'}}>
        <Outlet />
      </div>
      <footer id='home-footer'>
        <a href="https://en.wikipedia.org/wiki/Tokay_gecko">Tokay Gecko Wiki</a>
        <p>add more links</p>
      </footer>
    </div>
  )
}

export default Layout;