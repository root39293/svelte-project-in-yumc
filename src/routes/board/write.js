import { writable } from 'svelte/store';

const posts = writable([
	{
		id: '1',
		title: 'First Post'
	}
]);
const customPostsStore = {
	subscribe: posts.subscribe,
	addPost: (postData) => {
		const newpost = {
			...postData,
			id: Math.random().toString()
		};
		posts.update((items) => {
			return [...items, newpost];
		});
	},
	updatePost: (id, postData) => {
		posts.update((items) => {
			const postIndex = items.findIndex((i) => i.id === id);
			const updatedPost = { ...items[postIndex], ...postData };
			const updatedPosts = [...items];
			updatedPosts[postIndex] = updatedPost;
			return updatedPosts;
		});
	}
};
export default customPostsStore;