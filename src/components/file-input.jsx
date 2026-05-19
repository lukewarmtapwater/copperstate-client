import { RiUploadLine, RiCloseLine } from "@remixicon/react";
import { useRef, useState, useEffect } from "react";
import Button from "./button";
import { useActionData } from "react-router";
import Image from "./image";

function FileInput({ id, initialImages = [], onChange = () => { }, className = "" }) {
  const data = useActionData();
  const error = data?.fieldErrors?.[id]?.[0];

  const [files, setFiles] = useState([]);
  const [existingImages, setExistingImages] = useState(initialImages);
  const [deletedImages, setDeletedImages] = useState([]);
  const inputRef = useRef();

  const handleFiles = (newFiles) => {
    const filesArray = Array.from(newFiles);
    const updatedFiles = [...files, ...filesArray];
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const onSelect = (e) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  const removeFile = (fileToRemove) => {
    const updatedFiles = files.filter((file) => file !== fileToRemove);
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const removeExistingImage = (imagePath) => {
    setExistingImages(prev => prev.filter(img => img !== imagePath));
    setDeletedImages(prev => [...prev, imagePath]);
  };

  useEffect(() => {
    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      files.forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;
    }
  }, [files]);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={`flex items-center justify-center border rounded-md px-2 py-20 text-center cursor-pointer
        ${error ? "border-danger bg-danger/10" : "border-primary"}`}
      >
        <p className="flex gap-2">
          Drag & drop images or click to upload <RiUploadLine />
        </p>
      </div>

      <input
        id={id}
        name={id}
        type="file"
        multiple
        accept="image/*"
        ref={inputRef}
        onChange={onSelect}
        className="hidden"
      />

      {deletedImages.map((img) => (
        <input key={img} type="hidden" name="deletedImages" value={img} />
      ))}

      {(existingImages.length > 0 || files.length > 0) && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            ...existingImages.map(img => ({ id: img, value: img, onRemove: () => removeExistingImage(img) })),
            ...files.map(file => ({ id: `${file.name}-${file.lastModified}`, value: file, onRemove: () => removeFile(file) }))
          ].map((item) => (
            <div key={item.id} className="relative group aspect-square">
              <Image
                image={item.value}
                alt="Car"
                className="w-full h-full object-cover rounded-md border border-primary"
              />
              <Button
                onClick={item.onRemove}
                variant="danger"
                size="sm"
                className="absolute top-2 right-2 h-6 w-6 p-0 rounded-md opacity-0 group-hover:opacity-100"
                type="button"
              >
                <RiCloseLine />
              </Button>
            </div>
          ))}
        </div>
      )}

      {error && <div className="text-danger text-sm">{error}</div>}
    </div>
  );
}

export default FileInput;
