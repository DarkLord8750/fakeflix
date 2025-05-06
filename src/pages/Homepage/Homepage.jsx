import React from "react";
import { motion } from "framer-motion";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import Row from "../../components/Row/Row";
import Banner from "../../components/Banner/Banner";
import Credits from "../../components/Credits/Credits";
import { defaultPageFadeInVariants } from "../../motionUtils";

const Homepage = () => {
  const rows = useRetrieveData();

  return (
    <motion.div
      className="Homepage"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner />
      {rows && rows.map((movie) => (
        <Row
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          isLarge={movie.featured}
          data={[movie]} // Wrap the movie data in an array for Row to render
        />
      ))}
      <Credits />
    </motion.div>
  );
};

export default Homepage;
