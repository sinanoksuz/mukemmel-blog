import { getPosts } from "../../../src/blog-posts";
import { getPostss } from "../../../src/example";
const posts = getPosts();
const postss=getPostss();

export default (req, res) => {
  res.json({
    post: posts.find(post => post.slug === req.query.postId),
    comment:postss.find(comment=>comment.slug===req.query.postId)
  });
};
