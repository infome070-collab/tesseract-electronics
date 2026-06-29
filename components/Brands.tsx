const brands = [
  "adi",
  "cdil",
  "infineon",
  "microchip",
  "molex",
  "Nuvoton",
  "nxp",
  "omron",
  "st",
  "te",
  "ti",
  "vishay",
];

export default function Brands() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-sky-600">
          Trusted Brands
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          We source genuine electronic components from globally recognized
          manufacturers.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-28 items-center justify-center rounded-xl bg-white shadow transition hover:scale-105 hover:shadow-lg"
            >
              <img
                src={`/brand/${brand}.png`}
                alt={brand}
                className="max-h-14 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}