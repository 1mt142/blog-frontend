function SinglePostItem({ url, img, category, title, date }) {
  console.log("img", img);
  return (
    <a
      href={url}
      className="p-4 rounded-xl border border-solid border-[#E8E8EA]"
    >
      <img
        src={`http://localhost:3000/` + img}
        className="h-52 w-full rounded-md object-cover mb-4"
      />
      <span className="inline-block px-2 py-1 bg-[#4B6BFB] bg-opacity-5 text-[#4B6BFB] text-sm rounded-md">
        {category}
      </span>
      <h2 className="font-medium text-xl mt-2">{title}</h2>
      <span className="inline-block mt-2 text-[#97989F] text-sm">{date}</span>
    </a>
  );
}

export default SinglePostItem;
