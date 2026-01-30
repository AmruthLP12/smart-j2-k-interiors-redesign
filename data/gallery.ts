// Categories used by gallery ITEMS (no "all" here)
export type GalleryCategory =
  | "residential"
  | "commercial"
  | "hospitality"
  | "healthcare"
  | "retail";

// Categories used by FILTER UI (includes "all")
export type FilterCategory = GalleryCategory | "all";

// Filter buttons
export const filterCategories: FilterCategory[] = [
  "all",
  "residential",
  "commercial",
  "hospitality",
  "healthcare",
  "retail",
];

// Used internally for item generation
const itemCategories: GalleryCategory[] = [
  "residential",
  "commercial",
  "hospitality",
  "healthcare",
  "retail",
];

const titles: Record<GalleryCategory, string> = {
  residential: "Modern Living Space",
  commercial: "Corporate Workspace",
  hospitality: "Luxury Hospitality Suite",
  healthcare: "Healthcare Facility",
  retail: "Retail Interior Design",
};

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  year: number;
  src: string;
}

// 🔥 Helper to check if ID is in JPEG range
const isJpegRange = (id: number) => id >= 86 && id <= 131;

export const Gallery: GalleryItem[] = Array.from(
  { length: 131 },
  (_, i): GalleryItem => {
    const id = i + 1;
    const category = itemCategories[i % itemCategories.length];
    const year = i % 2 === 0 ? 2024 : 2023;

    const ext = isJpegRange(id) ? "jpeg" : "jpg";

    return {
      id,
      title: `${titles[category]} ${id}`,
      category,
      year,
      src: `/images/gallery/Gallery${id}.${ext}`,
    };
  }
);
