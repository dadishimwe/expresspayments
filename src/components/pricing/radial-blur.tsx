import { cn } from "@/lib/utils";
import LightPillar from "@/components/animations/light-pillar";

type Props = {
  className?: string;
};

export function RadialBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 isolate -z-10 h-full w-full",
        className,
      )}
    >
      {/* Original Radial Blur Background */}
      <div className="absolute top-0 left-0 h-1/2 w-full bg-[url('/radial-blur.png')] bg-cover bg-center bg-no-repeat opacity-50" />
      
      {/* Dynamic Light Pillar */}
      <div className="absolute inset-0 h-full w-full overflow-hidden opacity-30">
        <LightPillar
          topColor="#0047AB"
          bottomColor="#00AEEF"
          intensity={0.6}
          rotationSpeed={0.1}
          glowAmount={0.001}
          pillarWidth={2.5}
          pillarHeight={0.3}
          noiseIntensity={0.2}
          pillarRotation={15}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </div>
    </div>
  );
}
