import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-2 h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img
        src={loading}
        alt="Loading"
        className="w-5 h-5 mr-4 animate-spin pointer-events-none select-none"
      />
      <span dir="rtl" className="animate-pulse font-vazir">
        هوش مصنوعی در حال ایده پردازی هست ...
      </span>
    </div>
  );
};

export default Generating;
