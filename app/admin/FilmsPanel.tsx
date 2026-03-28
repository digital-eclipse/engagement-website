"use client";

import { useEffect, useState } from "react";
import { ImageUpload } from "./ImageUpload";

interface Film {
  slug: string;
  title: string;
  location: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  featured: boolean;
}

const emptyFilm: Film = {
  slug: "",
  title: "",
  location: "",
  description: "",
  thumbnail: "",
  videoUrl: "",
  featured: false,
};

export function FilmsPanel() {
  const [films, setFilms] = useState<Film[]>([]);
  const [editing, setEditing] = useState<Film | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/films")
      .then((r) => r.json())
      .then(setFilms);
  }, []);

  async function saveAll(updated: Film[]) {
    setSaving(true);
    await fetch("/api/films", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    setFilms(updated);
    setSaving(false);
  }

  async function saveFilm(film: Film) {
    const slug =
      film.slug ||
      film.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+$/, "");
    const updated = { ...film, slug };
    const exists = films.find((f) => f.slug === slug);
    const newList = exists
      ? films.map((f) => (f.slug === slug ? updated : f))
      : [...films, updated];
    await saveAll(newList);
    setEditing(null);
  }

  async function deleteFilm(slug: string) {
    await saveAll(films.filter((f) => f.slug !== slug));
  }

  async function toggleFeatured(slug: string) {
    await saveAll(
      films.map((f) => (f.slug === slug ? { ...f, featured: !f.featured } : f))
    );
  }

  if (editing) {
    return (
      <FilmForm
        film={editing}
        onSave={saveFilm}
        onCancel={() => setEditing(null)}
        saving={saving}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#1a1714]">
          Portfolio Films
        </h2>
        <button
          onClick={() => setEditing({ ...emptyFilm })}
          className="px-4 py-2 text-sm bg-[#b08d5e] text-white rounded-lg hover:bg-[#96753e] transition-colors"
        >
          + Add Film
        </button>
      </div>

      <div className="space-y-3">
        {films.map((film) => (
          <div
            key={film.slug}
            className="flex items-center gap-4 bg-white rounded-lg border border-[#e2ded8] p-4"
          >
            <div
              className="w-24 h-16 rounded bg-[#f0eeeb] bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${film.thumbnail})` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-[#1a1714] truncate">
                  {film.title}
                </h3>
                {film.featured && (
                  <span className="px-2 py-0.5 text-xs bg-[#b08d5e]/10 text-[#b08d5e] rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-[#5c554d] truncate">{film.location}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => toggleFeatured(film.slug)}
                className="px-3 py-1.5 text-xs border border-[#e2ded8] rounded-lg hover:border-[#b08d5e] transition-colors"
              >
                {film.featured ? "Unfeature" : "Feature"}
              </button>
              <button
                onClick={() => setEditing({ ...film })}
                className="px-3 py-1.5 text-xs border border-[#e2ded8] rounded-lg hover:border-[#b08d5e] transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => deleteFilm(film.slug)}
                className="px-3 py-1.5 text-xs border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {films.length === 0 && (
          <p className="text-center text-[#9b9389] py-12">
            No films yet. Add your first one.
          </p>
        )}
      </div>
    </div>
  );
}

function FilmForm({
  film,
  onSave,
  onCancel,
  saving,
}: {
  film: Film;
  onSave: (f: Film) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [form, setForm] = useState(film);

  const inputClass =
    "w-full px-3 py-2 text-sm border border-[#e2ded8] rounded-lg bg-white focus:outline-none focus:border-[#b08d5e] transition-colors";

  return (
    <div className="bg-white rounded-lg border border-[#e2ded8] p-6">
      <h2 className="text-lg font-semibold text-[#1a1714] mb-6">
        {film.slug ? "Edit Film" : "Add Film"}
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#5c554d] mb-1">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Maya & James"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#5c554d] mb-1">
              Location
            </label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="Toronto, Ontario"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5c554d] mb-1">
            Video URL (YouTube or Vimeo embed URL)
          </label>
          <input
            type="text"
            value={form.videoUrl}
            onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
            placeholder="https://www.youtube.com/embed/..."
            className={inputClass}
          />
        </div>

        <ImageUpload
          label="Thumbnail"
          currentUrl={form.thumbnail}
          onUploaded={(url) => setForm({ ...form, thumbnail: url })}
        />

        <div>
          <label className="block text-sm font-medium text-[#5c554d] mb-1">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            placeholder="Tell the story of this film..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
            className="w-4 h-4 accent-[#b08d5e]"
          />
          <span className="text-sm text-[#5c554d]">
            Show on homepage as featured film
          </span>
        </label>
      </div>

      <div className="flex gap-3 mt-8">
        <button
          onClick={() => onSave(form)}
          disabled={saving || !form.title}
          className="px-5 py-2.5 text-sm bg-[#b08d5e] text-white rounded-lg hover:bg-[#96753e] transition-colors disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Film"}
        </button>
        <button
          onClick={onCancel}
          className="px-5 py-2.5 text-sm border border-[#e2ded8] rounded-lg hover:border-[#b08d5e] transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
