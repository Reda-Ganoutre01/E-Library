import HeroTitle from "./HeroTitle";
import HeroText from "./HeroText";

/**
 * Hero component of the app
 * @returns {React.JSX.Element}
 */
export default function Hero() {
  return (
    <div
      className="hero h-[35rem] shadow-lg  border-secondary mb-10"
      style={{
        backgroundImage:
          "url('https://images6.alphacoders.com/705/705836.jpg')",
      }}
    >
      <div className="hero-content text-white">
        <div className="max-w-md flex flex-col justify-center items-center">
          <HeroTitle title="Expand Your Mind Reading a Book" />
          <HeroText
            text="Discover endless stories, expand your mind, and explore new ideas—all at your fingertips. Dive into a vast collection of books,
          research materials, and digital resources designed to inspire and empower you. Your next great read awaits!"
          />
        </div>
      </div>
    </div>
  );
}
