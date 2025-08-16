import React, { useEffect, useState } from "react";

const ImageComponent = ({ src, alt, className, width, height }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div>
      <img
        src={currentSrc}
        alt={alt}
        className={currentSrc === src ? className : `${className} blur-md`}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageComponent;
