import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li><NavLink to='heroes'>Heroes</NavLink></li>
					<li><NavLink to='counter'>Counter</NavLink></li>
					<li><NavLink to='background'>Background</NavLink></li>
				</ul>
			</nav>
			<Outlet />
			<footer>Copyright - React 2023</footer>
		</>
	)
}

export default Layout