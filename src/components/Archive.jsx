import { useState } from "react";
import createRandomPost from "./CreateRandomPost";

function Archive({ onAddPost }) {
  const [showArchive, setShowArchive] = useState(false);
  const archivedPosts = Array.from({ length: 6 }, () => createRandomPost());

  return (
    <section className="mb-8 dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Archivo de posts
        </h2>
        <button
          onClick={() => setShowArchive((s) => !s)}
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-md transition-colors"
        >
          <span>{showArchive ? "Ocultar" : "Mostrar"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${
              showArchive ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showArchive && (
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {archivedPosts.map((post, i) => (
              <div
                key={i}
                className="border dark:bg-gray-750 p-4 rounded-md hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {post.body}
                </p>
                <button
                  onClick={() => onAddPost(post)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Agregar como nuevo post
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Archive;
