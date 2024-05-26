import Navbar from "./navbar";
import React from "react";
import Footer from "./footer";
import axios from "axios";
const postes = [
  {
    id: 1,
    titre: "Friedrich Nietzsche",
    descr:
      "ceci descriptiFriedrich Nietzsche °◇° ©chess_abstract | instagramon 1",
    img: "https://i.pinimg.com/564x/08/fb/ed/08fbed339ff2746d388f4d89ae387400.jpg",
  },
  {
    id: 2,
    titre: "funny kitty cats",
    descr:
      "kitty cat kitty cats kitty kitty cat party ideas kitten kittens kittens cats kittens funny feline felines cat tattoo cat wallpaper cats cat cat drawing cat tattoos cats tattoo cat lover cat tattoo design cats wallpaper cat food cat painting cat bed cat lover gift cat t shirt cat anime cat accessories cat house cat lovers cat beds cat art cats dogs cat decor cats and dogs cat gifts",
    img: "https://i.pinimg.com/564x/11/7e/e7/117ee7cc6b520f321008184b5fee68af.jpg",
  },
  {
    id: 3,
    titre: "MINI Night Lamp",
    descr:
      "MINI Night Lamp: this project is inspired by Mohit Boite. Electronics is a very big ocean and to explore it today I made a small lamp mini night lamp which is controlled by Arduino microcontroller. The concept is simple, all you need is an LDR ( light dependent",
    img: "https://i.pinimg.com/564x/b6/e5/ca/b6e5ca5db9d1ed121d3babf17798f0e8.jpg",
  },
  {
    id: 4,
    titre: "MINI Boron Lander",
    descr:
      "The latest in a string of Lunar Lander-inspired freeform sculptures, this build boasts a full color display and Wi-Fi connectivity.",
    img: "https://i.pinimg.com/564x/f8/87/a0/f887a0d088cfdfe3d6f1bc7504ce4b5d.jpg",
  },
];
const deleteposte=async()=>{
  await axios.post("webp/back/delete.php",{
    postes,
  });
}
function Home() {
  const [posts, setPostes] = React.useState(postes);
  return (
    <div className="Posts">
      <Navbar></Navbar>
      {posts.map((post) => (
        <div className="post">
          <div className="image">
            <img src={post.img} />
          </div>
          <div className="titre">
            <h1>{post.titre}</h1>
            <h5>{post.descr}</h5>
            <button>read more</button>
            <span className="delete" onClick={deleteposte}>
              <button class="noselect">
                <span class="text">Delete</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
export default Home;
