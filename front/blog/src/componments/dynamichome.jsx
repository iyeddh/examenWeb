import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Dynamic() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/webp/back/get_posts.php")
      .then((response) => response.json())
      .then(
        (data) => {
          setPosts(data);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div className="Posts">
      <Navbar />
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <div className="image">
              <img
                src={`data:image/jpeg;base64,${post.image}`}
                alt={post.title}
              />
            </div>
            <div className="titre">
              <h1>{post.title}</h1>
              <h5>{post.post_text}</h5>
              <button>read more</button>
            </div>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
}

export default Dynamic;
