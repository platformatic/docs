import React from "react";

export const ArchitectureImage = ({ blok }) => (
  <div className="max-w-[2000px] mx-auto">
    <img
      src={blok.cache_arch[0].architecture_image.filename}
      className="w-full h-full object-contain"
      alt=""
    />
  </div>
);
