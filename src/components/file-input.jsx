import { RiUploadLine, RiCloseLine } from "@remixicon/react";
import { useRef, useState, useEffect } from "react";
import Button from "./button";
import { useActionData } from "react-router";

function FileInput({ id, onChange = () => {}, className = "" }) {
  const data = useActionData();
  const error = data?.fieldErrors?.[id]?.[0];

  const [files, setFiles] = useState([]);
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

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    onChange(updatedFiles);
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

      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}-${file.lastModified}`}
              className="relative group"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-24 object-cover rounded-md border border-primary"
                onLoad={(e) => URL.revokeObjectURL(e.target.src)}
              />
              <Button
                onClick={() => removeFile(index)}
                variant="ghost"
                className="absolute top-1 right-1"
                type="button"
              >
                <RiCloseLine className="text-muted" />
              </Button>
              <p className="text-xs mt-1 truncate">{file.name}</p>
            </div>
          ))}
        </div>
      )}

      <p>
        Uploaded: <span>{files.length}</span> image(s)
      </p>

      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

export default FileInput;
