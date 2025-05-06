// components/RowPoster/RowPoster.js
import "./rowPoster.scss";
import { FALLBACK_IMG_URL } from "../../requests";
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import useGenreConversion from "../../hooks/useGenreConversion";
import { showModalDetail } from "../../redux/modal/modal.actions";
import { Link } from "react-router-dom";
const RowPoster = ({ item, isLarge, isFavourite }) => {
  // Destructure the necessary fields from item
  const { title, genre_ids, image } = item; // Removed unused 'genre' and 'isSeries'
  let fallbackTitle = title || "Untitled Movie";

  // Safely handle genre_ids and convert them
  const genresConverted = useGenreConversion(genre_ids || []); // Fallback to empty array if genre_ids is undefined or null

  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.stopPropagation();
    dispatch(addToFavourites({ ...item, isFavourite }));
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch(removeFromFavourites({ ...item, isFavourite }));
  };

  const handleModalOpening = () => {
    dispatch(
      showModalDetail({ ...item, fallbackTitle, genresConverted, isFavourite })
    );
  };

  const handlePlayAction = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`Row__poster ${isLarge && "Row__poster--big"}`}
      onClick={handleModalOpening}
    >
      {isLarge ? (
        image ? (
          <img src={image} alt={fallbackTitle} />
        ) : (
          <img src={FALLBACK_IMG_URL} alt={fallbackTitle} />
        )
      ) : image ? (
        <img src={image} alt={fallbackTitle} />
      ) : (
        <>
          <img src={FALLBACK_IMG_URL} alt={fallbackTitle} />
          <div className="Row__poster__fallback">
            <span>{fallbackTitle}</span>
          </div>
        </>
      )}

      <div className="Row__poster-info">
        <div className="Row__poster-info--iconswrp">
          <Link
            className="Row__poster-info--icon icon--play"
            onClick={handlePlayAction}
            to={"/play"}
          >
            <FaPlay />
          </Link>
          {!isFavourite ? (
            <button
              className="Row__poster-info--icon icon--favourite"
              onClick={handleAdd}
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className="Row__poster-info--icon icon--favourite"
              onClick={handleRemove}
            >
              <FaMinus />
            </button>
          )}
          <button className="Row__poster-info--icon icon--toggleModal">
            <FaChevronDown onClick={handleModalOpening} />
          </button>
        </div>
        <div className="Row__poster-info--title">
          <h3>{fallbackTitle}</h3>
        </div>
        <div className="Row__poster-info--genres">
          {genresConverted &&
            genresConverted.map((genre, index) => (
              <span key={`Genre--id_${index}`} className="genre-title">
                {genre}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RowPoster;
