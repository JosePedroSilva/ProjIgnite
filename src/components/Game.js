import React from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
//Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
//Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  const StringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGames
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={StringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${StringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${StringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
