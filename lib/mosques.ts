import fs from "fs";
import path from "path";
import { MosqueData } from "./types";

const MOSQUES_DIR = path.join(process.cwd(), "data", "mosques");

/**
 * Get all mosque slugs for static generation
 */
export function getAllMosqueSlugs(): string[] {
    try {
        const files = fs.readdirSync(MOSQUES_DIR);
        return files
            .filter((file) => file.endsWith(".json"))
            .map((file) => file.replace(".json", ""));
    } catch {
        return [];
    }
}

/**
 * Get mosque data by slug
 */
export function getMosqueBySlug(slug: string): MosqueData | null {
    try {
        const filePath = path.join(MOSQUES_DIR, `${slug}.json`);
        const fileContents = fs.readFileSync(filePath, "utf8");
        return JSON.parse(fileContents) as MosqueData;
    } catch {
        return null;
    }
}

/**
 * Get all mosques with basic info for listing
 */
export function getAllMosques(): Pick<
    MosqueData,
    "slug" | "namaMasjid" | "bandar" | "negeri"
>[] {
    const slugs = getAllMosqueSlugs();
    const mosques: Pick<MosqueData, "slug" | "namaMasjid" | "bandar" | "negeri">[] = [];

    for (const slug of slugs) {
        const mosque = getMosqueBySlug(slug);
        if (mosque) {
            mosques.push({
                slug: mosque.slug,
                namaMasjid: mosque.namaMasjid,
                bandar: mosque.bandar,
                negeri: mosque.negeri,
            });
        }
    }

    return mosques;
}

/**
 * Generate URL-friendly slug from mosque name and city
 */
export function generateMosqueSlug(namaMasjid: string, bandar: string): string {
    const combined = `${namaMasjid}-${bandar}`;
    return combined
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Replace multiple hyphens with single
        .trim();
}
