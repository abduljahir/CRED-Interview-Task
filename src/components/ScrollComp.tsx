import ScrollCanvasSequence from "@/components/ScrollImageSequence";


export default function ScrollComp() {
  return (
    <ScrollCanvasSequence
      frameCount={275}
      basePath="/assets/frames"
      filePrefix="bigFeatures"
      extension=".jpg"
      imageWidth={1920}
      imageHeight={1080}
    />
  );
}
