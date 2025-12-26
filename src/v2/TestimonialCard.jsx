import { ReactComponent as ComaIcon } from "../assest/coma.svg";

const TestimonialCard = ({
  image,
  name,
  position,
  companyName,
  feedback,
  bg,
  isActive,
}) => {
  const borderColorClass = bg.replace("bg-", "border-");

  return (
    <div className="relative flex  font-[Inter] justify-center items-center py-24">
      <div
        className={`
          relative flex flex-col justify-between
          w-[250px] h-[350px]
          xxsm:w-[300px] xxsm:h-[300px]
          xsm:w-[350px] xsm:h-[320px]
          sm:w-[350px] sm:h-[300px]
          lg:w-[400px] lg:h-[300px]
          xl:w-[500px] xl:h-[350px]
          rounded-xl p-4
          transition-all duration-500 ease-out
          ${
            isActive
              ? `${bg}  text-white scale-100 opacity-100 `
              : `bg-transparent text-gray-400 border-2 border-gray-400  scale-95 opacity-40`
          }
        `}
      >
        {isActive && (
          <span
            className={`absolute -top-3 -left-3 lg:-top-6 lg:-left-6
            w-14 h-14 lg:w-20 lg:h-20
            rounded-full ${bg} border-4  border-white flex items-center justify-center`}
          >
            <ComaIcon className="w-8 lg:w-14" />
          </span>
        )}

        <div className="w-full flex flex-col items-end">
          <p className="font-bold text-base xl:text-lg">{name}</p>
          <p className="xl:text-base text-sm font-normal">{position}</p>
          <p className="xl:text-base text-sm font-medium">{companyName}</p>
        </div>

        <p className="xl:text-lg text-sm mt-4 font-semibold leading-relaxed">
          {feedback}
        </p>
        <div className="flex justify-center items-center mt-0 xsm:mt-10 sm:mt-6 lg:mt-7 xl:mt-6">
          <img
            src={image}
            alt={name}
            style={{ borderColor: bg }}
            className={`
              w-20 h-20 lg:w-24 lg:h-24 xl:w-36 xl:h-36
              rounded-full object-cover
              border-4 ${isActive ? borderColorClass : "border-gray-400"}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
