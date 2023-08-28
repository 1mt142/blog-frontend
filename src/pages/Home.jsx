import Hero from "~/components/Hero"
import LatestPost from "~/components/LatestPost"
import Sidebar from "~/components/Sidebar"

function Home() {
  return (
    <>
      <Hero />
      <div className="container flex gap-14 my-20 max-xl:flex-col">
        <LatestPost />
        <Sidebar />
      </div>
    </>
  )
}

export default Home
