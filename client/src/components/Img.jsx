import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className, alt, width, ...props }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt={alt || ""}
      effect="blur"
      src={src}
      {...props}
      wrapperProps={{
        style: {
          width: width || "100%",
          margin: "0",
        },
      }}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
};

export default Img;
