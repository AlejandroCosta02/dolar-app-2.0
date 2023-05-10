import Link from "next/link";
import { PostPropType } from "../page";

interface Props {
  post: PostPropType;
}
function EachPost({ post }: Props) {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md p-4 mt-2">
        <img
          src={post.image}
          className=" mb-2 w-full h-full object-fit-cover"
          alt="img"
        />
        <h2 className="text-xl font-bold mb-5 dark:text-black">{post.title}</h2>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 bg-gray-800 hover:bg-green-800 text-white py-2 px-4 rounded"
        >
          Seguir leyendo
        </Link>
      </div>
    </div>
  );
}

export default EachPost;
