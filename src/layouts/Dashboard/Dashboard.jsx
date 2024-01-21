
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
           <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only"></span>
                {/* ... (your sidebar open icon) */}
                <CiMenuFries  className='text-black text-lg'/>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                {/* ... (your logo and text) */}
                User Dashboard
              </a>
            </div>
            <div className="flex items-center">
              
              {/* ... (user menu code) */}
              <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
              
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 sm:translate-x-0  `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
            {/* this is user dashboard routes*/}
            <li>
            <section className="">
	<div className="flex flex-col">
		<div className="flex flex-col divide-ydivide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer ">Dashboard</summary>
				<div className="px-4 pb-4">
					<li>
          <Link to={'/overview'}>
            <div className=' items-center flex gap-1'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 .037C5.373.037 0 5.394 0 12c0 6.606 5.373 11.963 12 11.963 6.628 0 12-5.357 12-11.963C24 5.394 18.627.037 12 .037zm-.541 4.8c1.91-.13 3.876.395 5.432 1.934 1.426 1.437 2.51 3.44 2.488 5.317h2.133l-4.444 4.963-4.445-4.963h2.313c-.001-1.724-.427-2.742-1.78-4.076-1.325-1.336-2.667-2.11-4.978-2.303a9.245 9.245 0 013.281-.871zM6.934 6.95l4.445 4.963H9.066c0 1.724.426 2.742 1.778 4.076 1.326 1.336 2.667 2.112 4.978 2.305-2.684 1.268-6.22 1.398-8.71-1.064-1.427-1.437-2.512-3.44-2.489-5.317H2.488L6.934 6.95Z"></path></svg>
          <div>
              Overview
          </div>
            </div>
            </Link>

          </li>
				</div>
			</details>
		</div>
	</div>
</section>

          <li>
            <Link to={'/information'}>
            <div className='flex items-center gap-1'>
            <svg className='text-gray-500' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"></path></svg>
            <div className='text-gray-500/50'>
            Information
            </div>
            </div>
            </Link>
          </li>
            </li>
            <li>
              <Link to={'/shorter'}>
             <div className='flex items-center gap-1'>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Link">
                <g>
                <path d="M10.9,8a4.055,4.055,0,0,1,1.352.135,2.511,2.511,0,0,1-.7,4.863.5.5,0,0,0,0,1,3.508,3.508,0,0,0,2.944-5.2A3.557,3.557,0,0,0,11.434,7H5.59A3.5,3.5,0,0,0,5.4,14c.724.041,1.458,0,2.183,0a.5.5,0,0,0,0-1h0c-1.323,0-2.915.262-3.891-.843A2.522,2.522,0,0,1,5.59,8Z">
                </path>
                <path d="M18.41,17a3.5,3.5,0,0,0,.192-6.994c-.724-.041-1.458,0-2.183,0a.5.5,0,0,0,0,1h0c1.323,0,2.915-.262,3.891.843A2.522,2.522,0,0,1,18.41,16H13.1a4.055,4.055,0,0,1-1.352-.135,2.511,2.511,0,0,1,.7-4.863.5.5,0,0,0,0-1,3.508,3.508,0,0,0-2.944,5.2A3.557,3.557,0,0,0,12.566,17Z"></path>
                </g>
                </g>
                </svg>
                <div className='text-gray-500/50'>
                  Shortener
                </div>
             </div>
              </Link>
            </li>
            <li>
              <Link to={'/web_links'}>
              <div  className='flex items-center gap-1'>
              <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path>
              <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path>
              <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path>
              <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor">
                </path>
                </svg>
                <div className='text-gray-500/50'>
                  Websites
                </div>
              </div>
              </Link>
            </li>
            <li>
              <Link to={'/notices'}>
                <div className='flex items-center gap-1'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"></path>
                </svg>
                <div className='text-gray-500/50'>
                  Notice
                </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-[#F1F5F9] h-screen">
        <div className="p-4 mt-14">
          {/* ... (your content) */}
          <Outlet></Outlet>
        </div>
      </div>
    </>
        </div>
    );
};

export default Dashboard;