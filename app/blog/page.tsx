import EachPost from "./components/EachPost";
import HeroBlog from "./components/HeroBlog";
import { PrismaClient } from "@prisma/client";

export interface PostPropType {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  createdAt: Date;
}
const prisma = new PrismaClient();

const fetchData = async (): Promise<PostPropType[]> => {
  const post = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      slug: true,
      createdAt: true,
    },
  });
  return post;
};
async function Blog() {
  const post = await fetchData();
  return (
    <>
      <HeroBlog />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-12">
        {post.map((post) => (
          <EachPost post={post} />
        ))}
      </div>
      {/* <EachPost /> */}
    </>
  );
}

export default Blog;
