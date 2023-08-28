import { useState, useEffect } from "react";
import axios from "axios";
import SinglePostItem from "~/components/ui/SinglePostItem";
import SectionTitle from "~/components/ui/SectionTitle";

function LatestPost() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/post/blogs?page=1&limit=10")
      .then((res) => {
        setLatestPosts(res?.data?.data);
      });
  }, []);

  console.log(latestPosts);

  return (
    <div className="flex flex-wrap gap-6 flex-grow">
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="grid grid-cols-2 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 w-full">
        {latestPosts?.map((object, index) => (
          <SinglePostItem
            key={index}
            url={object.url}
            img={object.imagePath}
            category={object.category?.name}
            title={object.title}
            date={object.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestPost;
