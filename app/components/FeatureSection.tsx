import { CTAButton } from "./CTAButton";

const FeatureItem: React.FC<{
  feature: {
    icon: string;
    title: string;
    iconBgColor: string;
    desc: string;
  };
}> = ({ feature }) => {
  return (
    <div key={feature.title} className="flex flex-[0.5]">
      <div
        style={{ backgroundColor: feature.iconBgColor }}
        className={`h-10 w-10 flex items-center justify-center rounded-full mr-4`}
      >
        <img src={feature.icon} alt={feature.title} className="h-6 w-6" />
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-[14px] sm:text-[16px] lg:text-[19px] font-semibold text-[#161723]">
          {feature.title}
        </h2>
        <p className="paragraph">{feature.desc}</p>
      </div>
    </div>
  );
};

export const FeatureSection = () => {
  const features = [
    {
      icon: "/real-food.png",
      title: "Real Food",
      iconBgColor: "#DCF9CA",
      desc: "Wholesome recipes for dogs with real meat and veggies.",
    },
    {
      icon: "/premium-ingredient.png",
      iconBgColor: "#F8F0D6",
      title: "Premium Ingredient",
      desc: "Elevating pet care with unmatched safety and quality.",
    },
    {
      icon: "/made-fresh.png",
      iconBgColor: "#C8F2E7",
      title: "Made Fresh",
      desc: "We prioritize maintaining the integrity of whole foods and nutrition.",
    },
    {
      icon: "/vet-developed.png",
      iconBgColor: "#F7CABD",
      title: "Vet Developed",
      desc: "We raise the bar for dog nutrition, surpassing industry expectations.",
    },
  ];

  return (
    <section className="py-4 sm:py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">
          What makes us different
          <br />
          makes them stronger
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 my-8">
          <div className="flex flex-col space-y-8 sm:py-2 md:py-4 lg:py-6">
            {features.slice(0, 2).map((f) => (
              <FeatureItem feature={f} />
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/dog-food-split.png"
              alt="Dog food"
              className="rounded-full w-48 lg:w-60 xl:w-72 h-48 lg:h-60 xl:h-72 object-cover border-4 border-gray-200"
            />
          </div>

          <div className="flex flex-col space-y-8 sm:py-2 md:py-4 lg:py-6">
            {features.slice(2).map((f) => (
              <FeatureItem feature={f} />
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <CTAButton text="Get your dog’s healthy meal today!" />
        </div>

        <div className="text-sm text-gray-500 mt-2 flex flex-col sm:flex-row justify-center items-center">
          <div className="flex items-center">
            <img src="/shield-check.png" className="h-4 w-4 mr-2" /> 30-day
            money back guarantee
          </div>

          <img
            src="/payment-methods.png"
            className="h-6 mt-2 sm:mt-0 sm:ml-6"
          />
        </div>
      </div>
    </section>
  );
};
