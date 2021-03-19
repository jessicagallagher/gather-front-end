import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand"><i className="far fa-map in-header"></i><span className="navbar-text ml-2">
              G a t h e r
            </span></Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/create' className='nav-link'>C r e a t e</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
		)
	}
}

export default Header

// class Header extends Component {
// 	render() {
// 		return (
// 			<div>
//         <header class="my-4">
//           <i class="fab fa-cotton-bureau ml-4"></i>
//           <h1 class="header ml-2">Gather</h1>
//                     <nav>
//                         Log in,
//                         Sign up,
//                         Create
//                     </nav>
//                 </header>
//             </div>
// 		)
// 	}
// }