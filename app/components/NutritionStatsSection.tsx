import { CTAButton } from "./CTAButton";

export const NutritionStatsSection = () => {
  const stats = [
    {
      label:
        "Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.",
      value: "97%",
    },
    {
      label:
        "Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.",
      value: "84%",
    },
    {
      label:
        "Our dog food's high protein and fat digestibility contribute to ideal stool quality.",
      value: "92%",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-4 sm:py-16 ">
      <div className="max-w-[999px] mx-auto flex flex-col sm:flex-row space-x-6">
        <div className="flex flex-col flex-[0.5] px-4 lg:px-0">
          <h2 className="section-title">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h2>
          <p className="paragraph mt-4">
            Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.
          </p>

          <h3 className="font-semibold text-[14px] sm:text-[16px] lg:text-[19px] text-black mt-8 mb-4">
            Key Points:
          </h3>
          <div className="space-y-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex border-[#E3E3E8] border-b-[1px] pb-4"
              >
                <div className="texl-xl sm:text-2xl text-3xl flex-[10%] font-bold text-[#EE6F4B]">
                  {s.value}
                </div>
                <div className="paragraph flex-[90%] pl-6">{s.label}</div>
              </div>
            ))}
          </div>

          <CTAButton text="Give your furry friend the gift of wholesome nutrition" />
        </div>
        <div className="flex flex-[0.5]  px-4 lg:px-0">
          <img
            src="/key-points.png"
            alt="Dog nutrition"
            className="mx-auto rounded-lg  object-cover"
          />
        </div>
      </div>
    </section>
  );
};
