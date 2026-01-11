import { getSortedPosts } from "@/utils/content-utils";

export async function GET() {
	const posts = await getSortedPosts();

	const allPostsData = posts.map((post) => ({
		id: post.id,
		title: post.data.title,
		published: post.data.published.getTime(),
	}));

	return new Response(JSON.stringify(allPostsData));
}
