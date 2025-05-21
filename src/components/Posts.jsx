import List from "./List";

function Posts({ posts }) {
  return (
    <div className="dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Recent posts
      </h2>
      {posts.length === 0 ? (
        <p className="text-center py-6 text-gray-500 dark:text-gray-400">
          No posts to show. Create a new one!
        </p>
      ) : (
        <List posts={posts} />
      )}
    </div>
  );
}

export default Posts;
