import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Posts {
  id: number;
  title: string;
  body: string;
  image: string;
  slug: string;
}
const fetchEachPost = async (slug: string): Promise<Posts | null> => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        title: true,
        body: true,
        image: true,
        slug: true,
      },
    });
    if (!post) {
      throw new Error("error");
    }
    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
};

function formatText(rawText: string | undefined) {
  if (!rawText) {
    return "";
  }

  // Replace newline characters with <br> tags
  let formattedText = rawText.replace(/\n/g, "<br>");

  // Wrap URLs with <a> tags
  formattedText = formattedText.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank">$1</a>'
  );

  // Apply bold formatting to text within double underscores (__)
  formattedText = formattedText.replace(/__(.*?)__/g, "<strong>$1</strong>");

  return formattedText;
}

async function Post({ params }: { params: { slug: string } }) {
  const post = await fetchEachPost(params.slug);
  return (
    <>
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline text-center">{post?.title}</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/3 p-4">
          <img
            src={post?.image}
            alt="Post Image"
            className="object-cover rounded-lg h-full w-full"
          />
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-4">{post?.title}!!!</h2>
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: formatText(post?.body) }}
          ></p>
        </div>
      </div>
    </>
  );
}

export default Post;
