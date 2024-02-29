import {writable} from 'svelte/store';

const posts = writable([
    {
      id: '1',
      title: "First Post",
      summary: "This is the summary of the first post.",
      author: "Author Name",
      createdAt: "2024-01-01",
    },
  ]);
const customPostsStore={
    subscribe: posts.subscribe,
    addPost:(postsData) =>{
        const newpost ={
            ...postsData,
            id: Math.random().toString(),
        };
    posts.update((items)=>{
        return[newpost, ...items]
    });
    }
}
export default customPostsStore;