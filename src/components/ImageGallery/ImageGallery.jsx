import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onItemClick }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map((image) => {
          return (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onItemClick={onItemClick}
            />
          );
        })}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onItemClick: PropTypes.func.isRequired,
};
