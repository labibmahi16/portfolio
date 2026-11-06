import { useState } from "react";

// Image with a graceful placeholder if the file hasn't been added yet
export default function Img({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label || "add image"}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
