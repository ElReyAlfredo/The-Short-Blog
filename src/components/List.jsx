function List({ posts }) {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post, i) => (
        <li
          key={i}
          className="py-4 first:pt-0 last:pb-0 transition-colors dark:hover:bg-gray-750"
        >
          <article>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default List;
