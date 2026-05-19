import { useState } from "react";
import Button from "./button";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
} from "@remixicon/react";
import Image from "./image";

function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative w-full">
        <h4 className="absolute text-subtle m-3 z-10">
          {current + 1}/{images.length}
        </h4>
        <div
          className="w-full h-[400px] flex items-center justify-center bg-foreground rounded-md cursor-pointer"
          onClick={() => setFullscreen(true)}
        >
          <Image
            key={images[current]}
            image={images[current]}
            className="max-h-[400px] object-contain"
          />
        </div>

        {images.length > 1 && (
          <>
            <div className="w-full flex justify-between px-6 absolute top-1/2 -translate-y-1/2 z-20">
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
                  className={`w-2 h-2 rounded-full ${i === current ? "bg-foreground" : "bg-muted"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {fullscreen && (
        <div className="fixed inset-0 bg-foreground z-[300] flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 text-subtle z-[300]"
          >
            <RiCloseLine />
          </Button>

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              key={images[current]}
              image={images[current]}
              className="max-h-screen max-w-screen object-contain"
            />

            {images.length > 1 && (
              <>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  variant="ghost"
                  className="absolute left-4 text-subtle"
                >
                  <RiArrowLeftSLine />
                </Button>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  variant="ghost"
                  className="absolute right-4 text-subtle"
                >
                  <RiArrowRightSLine />
                </Button>

                <h4 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-subtle bg-black px-3 py-1 rounded-full">
                  {current + 1}/{images.length}
                </h4>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
