function Results({ posts }) {
  return (
    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <span className="text-lg font-medium">{posts.length}</span>
      <span className="text-sm">posts found</span>
    </div>
  );
}

export default Results;
