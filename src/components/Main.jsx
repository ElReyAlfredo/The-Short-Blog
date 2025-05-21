import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

function Main({ posts, onAddPost }) {
  return (
    <main className="mb-8">
      <div className="grid grid-cols-1 gap-8">
        <FormAddPost onAddPost={onAddPost} />
        <Posts posts={posts} />
      </div>
    </main>
  );
}

export default Main;
