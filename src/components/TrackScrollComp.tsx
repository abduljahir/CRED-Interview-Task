import ScrollCanvasSequence from "@/components/ScrollImageSequence";

export default function TrackScrollComp() {
  return (
    <ScrollCanvasSequence
      frameCount={162}
      basePath="/assets/track"
      filePrefix="track"
      extension=".png"
      imageWidth={1920}
      imageHeight={1080}
    />
  );
}
