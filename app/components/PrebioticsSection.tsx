export const PrebioticsSection = () => {
  return (
    <section className="bg-white pb-4 sm:pb-16 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row">
        <div className=" flex-[0.5] sm:pr-6 flex flex-col items-center justify-center mt-4 sm:mt-0">
          <h2 className="section-title">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h2>
          <p className="paragraph mt-4 mb-4 sm:mb-0">
            Our dog food formula contains carefully selected prebiotics that
            work in harmony with the gut microbiota, providing the necessary
            nutrients for the growth and maintenance of beneficial bacteria,
            ultimately supporting digestive health.
          </p>
        </div>

        <div className="flex-[0.5]">
          <img
            src="/prebiotics.png"
            alt="Happy dog"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
