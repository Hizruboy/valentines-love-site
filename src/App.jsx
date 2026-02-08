import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div>
      <section className="section">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          I don’t say this enough.
        </motion.h1>
      </section>

      <section className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          You feel like comfort food at midnight.
        </motion.h2>
        <p>Wai Wai 🍜 · Buldak 🔥</p>
      </section>

      <section className="section">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Late nights. Low volume. Heavy feelings.
        </motion.h2>
      </section>

      <section className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          This is me choosing you — again.
        </motion.h2>
      </section>
    </div>
  );
}
