import { FaAngleRight } from "react-icons/fa6"

function Breadcrumbs({ children }) {
  return (
    <div className="container mt-6 max-lg:!p-0 max-lg:mt-0 max-lg:max-w-none">
      <div className="h-48 bg-gray-100 flex flex-col items-center justify-center rounded-xl max-lg:rounded-none">
        <h1 className="text-4xl">{children}</h1>
        <div className="flex gap-1 items-center mt-4 text-sm">
          <span>Home</span>
          <span>
            <FaAngleRight size={12} />
          </span>
          <span>{children}</span>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
