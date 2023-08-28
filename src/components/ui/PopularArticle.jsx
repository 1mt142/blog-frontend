function PopularArticle({ url, img, title, date }) {
  return (
    <div className="flex mt-6 items-center">
      <a href={url} className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center">
        <img src={img} className="rounded-full w-full h-full" />
      </a>
      <div className="flex-grow ml-5">
        <a href={url} className="font-medium text-lg">
          {title}
        </a>
        <div className="text-sm flex gap-2 text-gray-400 mt-1">
          {date}
        </div>
      </div>
    </div>
  )
}

export default PopularArticle
