export const CTAButton: React.FC<{
  text: string;
}> = ({ text }) => (
  <button className="bg-[#EE6F4B] hover:bg-orange-600 text-white px-8 sm:px-28 py-3 rounded-md font-semibold transition">
    {text}
  </button>
);
