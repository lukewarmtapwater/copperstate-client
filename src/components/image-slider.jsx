import { useState } from "react";
import Button from "./button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Image from "./image";

function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      <h4 className="absolute text-white m-3">
        {current + 1}/{images.length}
      </h4>
      <div className="w-full h-[400px] flex items-center justify-center bg-foreground rounded-md">
        <Image
          image={images[current]}
          className="max-h-[400px] object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <div className="w-full flex justify-between px-6 absolute top-1/2 -translate-y-1/2">
            <Button variant="primary" onClick={prev}>
              <RiArrowLeftSLine />
            </Button>

            <Button variant="primary" onClick={next}>
              <RiArrowRightSLine />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-foreground" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageSlider;
