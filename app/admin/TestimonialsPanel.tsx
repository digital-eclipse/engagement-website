"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  id: string;
  quote: string;
  couple: string;
  location: string;
}

const empty: Testimonial = { id: "", quote: "", couple: "", location: "" };

export function TestimonialsPanel() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  async function saveAll(updated: Testimonial[]) {
    setSaving(true);
    await fetch("/api/testimonials", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    setItems(updated);
    setSaving(false);
  }

  async function saveItem(item: Testimonial) {
    const id = item.id || String(Date.now());
    const updated = { ...item, id };
    const exists = items.find((t) => t.id === id);
    const newList = exists
      ? items.map((t) => (t.id === id ? updated : t))
      : [...items, updated];
    await saveAll(newList);
    setEditing(null);
  }

  async function deleteItem(id: string) {
    await saveAll(items.filter((t) => t.id !== id));
  }

  if (editing) {
    return (
      <TestimonialForm
        item={editing}
        onSave={saveItem}
        onCancel={() => setEditing(null)}
        saving={saving}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#1a1714]">Testimonials</h2>
        <button
          onClick={() => setEditing({ ...empty })}
          className="px-4 py-2 text-sm bg-[#b08d5e] text-white rounded-lg hover:bg-[#96753e] transition-colors"
        >
          + Add Testimonial
        </button>
      </div>

      <div className="space-y-3">
        {items.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg border border-[#e2ded8] p-4"
          >
            <p className="text-sm text-[#1a1714] italic line-clamp-2">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-[#5c554d]">
                {t.couple} &mdash; {t.location}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditing({ ...t })}
                  className="px-3 py-1.5 text-xs border border-[#e2ded8] rounded-lg hover:border-[#b08d5e] transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(t.id)}
                  className="px-3 py-1.5 text-xs border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-center text-[#9b9389] py-12">
            No testimonials yet.
          </p>
        )}
      </div>
    </div>
  );
}

function TestimonialForm({
  item,
  onSave,
  onCancel,
  saving,
}: {
  item: Testimonial;
  onSave: (t: Testimonial) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [form, setForm] = useState(item);

  const inputClass =
    "w-full px-3 py-2 text-sm border border-[#e2ded8] rounded-lg bg-white focus:outline-none focus:border-[#b08d5e] transition-colors";

  return (
    <div className="bg-white rounded-lg border border-[#e2ded8] p-6">
      <h2 className="text-lg font-semibold text-[#1a1714] mb-6">
        {item.id ? "Edit Testimonial" : "Add Testimonial"}
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#5c554d] mb-1">
              Couple
            </label>
            <input
              type="text"
              value={form.couple}
              onChange={(e) => setForm({ ...form, couple: e.target.value })}
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
            Quote
          </label>
          <textarea
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            rows={4}
            placeholder="What the couple said..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => onSave(form)}
          disabled={saving || !form.quote || !form.couple}
          className="px-5 py-2.5 text-sm bg-[#b08d5e] text-white rounded-lg hover:bg-[#96753e] transition-colors disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
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
