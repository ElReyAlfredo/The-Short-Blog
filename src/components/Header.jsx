import Results from "./Results";
import SearchPosts from "./SearchPosts";

function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
        The Short Blog
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Results posts={posts} />
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchPosts
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <button
            onClick={onClearPosts}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Clear posts
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
