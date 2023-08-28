import { FaCalendarDays } from "react-icons/fa6"

function DetailedPost({ url, img, title, date, content }) {
  return (
    <a href={url} className="p-4 rounded-xl border border-solid border-[#E8E8EA]">
      <img src={img} className="w-full rounded-md object-cover mb-4" />
      <div className="flex gap-[6px] mt-3 text-gray-500 text-sm font-semibold">
        <FaCalendarDays className="mt-[2px]" />
        <span>{date}</span>
      </div>
      <h2 className="text-2xl font-semibold mt-2">
        {title}
      </h2>
      <p className="mt-2 text-gray-500">
        {content}
      </p>
    </a>
  )
}

export default DetailedPost
