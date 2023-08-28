import { FaBarsStaggered, FaMagnifyingGlass, FaXmark } from "react-icons/fa6"

function Header() {

  // Mobile sidebar open/close function.
  const sidebarToggle = () => {
    document.querySelector('.mobile-sidebar').classList.toggle('sidebar-show')
  }

  return (
    <div className="container mx-auto flex justify-between h-[100px]">

      {/* Logo area */}
      <div className="flex items-center text-lg">
        <img src="/logo.svg" alt="Meeblog logo." />
      </div>

      {/* Navbar && Mobile sidebar */}
      <div className="navbar mobile-sidebar">
        <span className="sidebar-close" onClick={sidebarToggle}>
          <FaXmark size={20} />
        </span>
        <a href="/">Home</a>
        <a href="https://github.com/meecan/meecan.github.io" target="_blank" rel="noreferrer">Portfolio</a>
        <a href="mailto:example@email.com">Contact</a>
      </div>

      {/* Mobile sidebar backdrop */}
      <div className="sidebar-backdrop" onClick={sidebarToggle}></div>

      {/* Search area */}
      <div className="flex items-center max-lg:hidden">
        <div className="relative">
          <input type="text" placeholder="Search" className="outline-none bg-[#F4F4F5] w-48 px-4 py-2 pr-10 rounded-md" />
          <span className="icon absolute right-3 top-2/4 -translate-y-1/2 pointer-events-none">
            <FaMagnifyingGlass size={14} color='#52525b' />
          </span>
        </div>
      </div>

      {/* Mobile sidebar toggle button */}
      <div className="flex items-center lg:hidden">
        <span className="p-3 cursor-pointer" onClick={sidebarToggle}>
          <FaBarsStaggered size={18} />
        </span>
      </div>

    </div>
  )
}

export default Header
