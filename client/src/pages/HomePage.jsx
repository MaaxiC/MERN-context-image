import { usePosts } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Postcard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">There are no posts</h1>
      </div>
    );

  return (
    <div className="text-white">
      <header className="flex justify-between py-4">
        <h1 className="text-xl text-grey-300 font-bold">Posts ({posts.length})</h1>
        <Link to="/new" className="bg-indigo-600 hover:bg-indigo-500 text-sm px-3 py-2 rounded-sm">Create New Post</Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Postcard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
