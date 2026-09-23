const images = [
  "/hero/hero-1.png",
  "/hero/hero-2.png",
  "/hero/hero-3.png",
  "/hero/hero-4.png",
  "/hero/hero-5.png",
];

// Doubled so the track can loop seamlessly at -50% translation.
const slides = [...images, ...images];

export default function BackgroundSlider() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="bg-slider-track flex h-full w-max">
        {slides.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="h-full w-auto flex-shrink-0 object-cover opacity-70"
          />
        ))}
      </div>
    </div>
  );
}
