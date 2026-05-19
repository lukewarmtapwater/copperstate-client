import { useEffect, useState } from "react";
import request from "../utils/request";
import Loader from "./loader";

function Image({ image, className = "", alt = "", ...props }) {
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let objectUrl;

    async function fetchImage() {
      if (image instanceof File || (typeof image === 'string' && image.startsWith("blob:"))) {
        objectUrl = image instanceof File ? URL.createObjectURL(image) : image;
        setSrc(objectUrl);
        setLoading(false);
        return;
      }

      const res = await request(`/uploads/${encodeURIComponent(image)}`);

      setLoading(false);

      if (!res.ok) {
        setError(true);
        return;
      }

      const blob = await res.blob();

      objectUrl = URL.createObjectURL(blob);

      setSrc(objectUrl);
    }

    if (image) {
      fetchImage();
    }

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [image]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-danger text-xs">Failed to load image.</p>;
  }

  return <img src={src} alt={alt} className={className} {...props} />;
}

export default Image;
