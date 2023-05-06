import Link from "next/link";
import { PostPropType } from "../page";

interface Props {
  post: PostPropType;
}
function EachPost({ post }: Props) {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={post.image}
          className=" mb-2 w-full h-full object-fit-cover"
          alt="img"
        />
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 pb-4">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Leer mas ✅
        </Link>
      </div>
    </div>
  );
}

export default EachPost;
