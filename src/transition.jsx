import { motion } from "framer-motion";
import logoneem from "./assets/images/logoneem.png"

const transition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#B5CFB7', // Adjust background color
          zIndex: 100, // Ensure it's above other content
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff', // Text color
          fontSize: '2rem', // Adjust font size as needed
          fontWeight: 'bold',
        }}
      >
        {/* {slidername} */}
        <img src={logoneem} alt="" />
      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#B5CFB7',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        {/* {slidername} */}
        <img src={logoneem} alt="" />
      </motion.div>
    </>
  );
};

export default transition;
