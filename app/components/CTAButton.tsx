export const CTAButton: React.FC<{
  text: string;
}> = ({ text }) => (
  <button className="bg-[#EE6F4B] hover:bg-orange-600 text-white w-full py-3 rounded-md font-semibold transition">
    {text}
  </button>
);
