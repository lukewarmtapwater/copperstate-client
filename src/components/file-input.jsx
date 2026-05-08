import { RiUploadLine } from "@remixicon/react";
import { useRef, useState } from "react";
import { useActionData } from "react-router";

function FileInput({ id, onChange = () => {}, className = "" }) {
  const data = useActionData();
  const error = data?.fieldErrors?.[id]?.[0];

  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const handleFiles = (selectedFiles) => {
    const images = Array.from(selectedFiles).filter((f) =>
      f.type.startsWith("image/"),
    );

    const updated = [...files, ...images];
    setFiles(updated);
    onChange(updated);
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const onSelect = (e) => {
    handleFiles(e.target.files);
  };

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

      <p>
        Uploaded: <span>{files.length}</span> image(s)
      </p>

      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

export default FileInput;
