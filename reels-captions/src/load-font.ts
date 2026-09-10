import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";

const { fontFamily } = loadDMSans("normal", {
  weights: ["700"],
});

export const CaptionFont = fontFamily;

export const loadFont = async (): Promise<void> => {
  await loadDMSans("normal", { weights: ["700"] }).waitUntilDone();
};
