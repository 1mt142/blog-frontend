function PostContent({ children, category, url, title, date }) {

  return (
    <div className="container xl:max-w-4xl lg:max-w-4xl" id="postContent">
      <h1 className="block mt-4 font-semibold text-3xl">{title}</h1>
      <div className="text-sm text-[#696A75] mt-4">{date}</div>
      <a href={url} className="inline-block mt-3 bg-[#4B6BFB] text-white px-3 py-1 text-sm rounded-md">{category}</a>
      <div className="mb-16 mt-8" dangerouslySetInnerHTML={{ __html: children }}></div>
    </div>
  )
}

export default PostContent
