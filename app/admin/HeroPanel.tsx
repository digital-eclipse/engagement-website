"use client";

import { useEffect, useState } from "react";
import { ImageUpload } from "./ImageUpload";

interface Settings {
  heroImage: string;
  heroHeading: string;
  heroHeadingItalic: string;
  heroSubtext: string;
}

export function HeroPanel() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then(setSettings);
  }, []);

  async function save() {
    if (!settings) return;
    setSaving(true);
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!settings) return <p className="text-[#9b9389] py-12 text-center">Loading...</p>;

  const inputClass =
    "w-full px-3 py-2 text-sm border border-[#e2ded8] rounded-lg bg-white focus:outline-none focus:border-[#b08d5e] transition-colors";

  return (
    <div className="bg-white rounded-lg border border-[#e2ded8] p-6">
      <h2 className="text-lg font-semibold text-[#1a1714] mb-6">
        Hero Section
      </h2>

      <div className="space-y-5">
        <ImageUpload
          label="Hero Background Image"
          currentUrl={settings.heroImage}
          onUploaded={(url) => setSettings({ ...settings, heroImage: url })}
        />

        <div>
          <label className="block text-sm font-medium text-[#5c554d] mb-1">
            Heading (first line)
          </label>
          <input
            type="text"
            value={settings.heroHeading}
            onChange={(e) =>
              setSettings({ ...settings, heroHeading: e.target.value })
            }
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5c554d] mb-1">
            Heading (italic second line)
          </label>
          <input
            type="text"
            value={settings.heroHeadingItalic}
            onChange={(e) =>
              setSettings({ ...settings, heroHeadingItalic: e.target.value })
            }
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5c554d] mb-1">
            Subtext
          </label>
          <textarea
            value={settings.heroSubtext}
            onChange={(e) =>
              setSettings({ ...settings, heroSubtext: e.target.value })
            }
            rows={2}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Preview */}
        <div>
          <label className="block text-sm font-medium text-[#5c554d] mb-2">
            Preview
          </label>
          <div
            className="relative aspect-video rounded-lg overflow-hidden bg-[#1a1714]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${settings.heroImage})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative flex items-center justify-center h-full text-center px-6">
              <div>
                <p className="text-white text-2xl font-serif">
                  {settings.heroHeading}
                  <br />
                  <span className="italic">{settings.heroHeadingItalic}</span>
                </p>
                <p className="text-white/70 text-sm mt-2">
                  {settings.heroSubtext}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={save}
          disabled={saving}
          className="px-5 py-2.5 text-sm bg-[#b08d5e] text-white rounded-lg hover:bg-[#96753e] transition-colors disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
        {saved && (
          <span className="text-sm text-green-600">Saved!</span>
        )}
      </div>
    </div>
  );
}
