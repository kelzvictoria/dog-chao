export const GastrointestinalSection = () => {
  return (
    <section className="bg-white py-4 sm:py-16 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row">
        <div className=" flex-[0.5]">
          <img
            src="/gastro-health.png"
            alt="Happy dog"
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex-[0.5] sm:pl-6 flex flex-col items-center justify-center mt-4 sm:mt-0">
          <h2 className="section-title">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h2>
          <p className="paragraph mt-4">
            Through rigorous scientific studies and consultations with
            veterinarians, we have created a breakthrough formula exclusively
            tailored to combat the health challenges prevalent in dogs. A
            staggering 91% of our customers have reported significant
            improvements in their dogs' health after incorporating our product
            into their diet.
          </p>
        </div>
      </div>
    </section>
  );
};
