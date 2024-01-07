type POST = { id: string; description: string; url: string; name: string };

let posts: POST[] = [];

export const getPosts = () => posts;

export const addPosts = (post: POST) => {
  posts.push(post);
};

export const deletePosts = (id: string) => {
  posts = posts.filter((elem) => elem.id != id);
};

export const updatePosts = (
  id: string,
  name: string,
  description: string,
  url: string
) => {
  const post = posts.find((elem) => elem.id == id);
  if (post) {
    (post.name = name), (post.url = url), (post.description = description);
  } else {
    throw new Error("No post matched");
  }
};

export const idPosts = (id: string) => {
  return posts.find((elem) => elem.id == id);
};
