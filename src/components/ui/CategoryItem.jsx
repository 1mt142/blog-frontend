import { FaAngleRight } from "react-icons/fa6"

function CategoryItem({ index, title, url, posts }) {
  const marginTop = index === 0 ? 'mt-5' : 'mt-1'

  return (
    <a
      href={url}
      className={`${marginTop} tracking-wide font-medium flex bg-grad group rounded-xl overflow-hidden`}
    >
      <div className="flex items-center gap-2 bg-white w-full h-full py-3 rounded-xl">
        <span className="transition-all group-hover:text-[#4B6BFB]">
          <FaAngleRight size={12} />
        </span>
        <span className="transition-all group-hover:text-[#4B6BFB]">
          {title}
        </span>
        <span className="ml-auto text-sm text-gray-400">
          ({posts})
        </span>
      </div>
    </a>
  )
}

export default CategoryItem
