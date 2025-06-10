import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import '../src/styles.css';

export default function Home() {
  return (
    <div className="container text-center py-5">
      <motion.h1 
        className="display-4 fw-bold text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Guia do Bebê Reborn 👶✨
      </motion.h1>
      <p className="lead text-secondary">Cuide do seu bebê reborn como um profissional!</p>
      <motion.button 
        className="btn btn-lg btn-warning fw-bold mt-4 shadow-lg"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.location.href = "/oferta"}
      >
        Veja por que você precisa desse e-book
      </motion.button>
    </div>
  );
}