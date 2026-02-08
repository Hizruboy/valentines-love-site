import { motion } from "framer-motion";
import { useEffect } from "react";
import "./index.css";

export default function App() {

  // cursor glow effect
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const moveGlow = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      glow.remove();
    };
  }, []);

  return (
    <div>

      {/* HERO */}
      <section className="section center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="hero-text"
        >
          I don’t say this enough…
        </motion.h1>
      </section>

      {/* LYRIC SECTION */}
      <section className="section dark">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="lyric"
        >
          If a double decker bus…
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="lyric"
        >
          crashes into us…
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="lyric highlight"
        >
          to die by your side is such a heavenly way to die.
        </motion.h2>
      </section>

      {/* FLOATING PHOTO SECTION */}
      <section className="section center">
        <motion.img
          src="/photo1.jpg"
          alt="us"
          className="photo floating"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        />
      </section>

      {/* EMOTIONAL TEXT */}
      <section className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="soft-text"
        >
          You feel like late-night music and comfort food.
        </motion.h2>

        <p>Wai Wai 🍜 · Buldak 🔥</p>
      </section>

      {/* FINAL */}
      <section className="section center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="hero-text"
        >
          Still choosing you.
        </motion.h1>
      </section>

    </div>
  );
}
