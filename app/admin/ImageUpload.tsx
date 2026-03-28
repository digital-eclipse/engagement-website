"use client";

import { useRef, useState } from "react";

export function ImageUpload({
  currentUrl,
  onUploaded,
  label,
}: {
  currentUrl: string;
  onUploaded: (url: string) => void;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl);

  async function handleUpload(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const { url } = await res.json();
    setPreview(url);
    onUploaded(url);
    setUploading(false);
  }

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-[#5c554d] mb-2">
          {label}
        </label>
      )}
      <div className="flex items-start gap-4">
        <div
          className="w-32 h-20 rounded-lg bg-[#f0eeeb] bg-cover bg-center border border-[#e2ded8] shrink-0"
          style={{ backgroundImage: preview ? `url(${preview})` : undefined }}
        />
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="px-4 py-2 text-sm bg-white border border-[#e2ded8] rounded-lg hover:border-[#b08d5e] transition-colors disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
          <input
            type="text"
            value={preview}
            onChange={(e) => {
              setPreview(e.target.value);
              onUploaded(e.target.value);
            }}
            placeholder="Or paste image URL"
            className="px-3 py-1.5 text-sm border border-[#e2ded8] rounded-lg bg-white w-64"
          />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
            }}
          />
        </div>
      </div>
    </div>
  );
}
