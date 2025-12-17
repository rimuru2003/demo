import { ReactComponent as ComaIcon } from "../assest/coma.svg";

const TestimonialCard = ({
  image,
  name,
  position,
  companyName,
  feedback,
  color,
  bg,
  isActive = false,
}) => {
  return (
    <div className="relative flex justify-center items-center cursor-pointer  py-9">
      <div className="relative w-full   max-w-md">
        {isActive && (
          <div
            className="absolute inset-0 bg-gray-200 rounded-xl 
                w-[250px] h-[350px] 
                xxsm:w-[300px] xxsm:h-[350px] 
                xsm:w-[350px] xsm:h-[340px] 
                sm:w-[350px] sm:h-[350px] 
                 xl:w-[450px] xl:h-[400px] 
                   z-0 rotate-[6deg] transition-all duration-500 
                   ease-linear"
          />
        )}
        <div
          className={`relative z-10  flex flex-col justify-between 
          w-[250px] h-[350px] 
          xxsm:w-[300px] xxsm:h-[350px] 
           xsm:w-[350px] xsm:h-[340px] 
             sm:w-[350px] sm:h-[350px] 
                          lg:w-[350px] lg:h-[380px] 

             xl:w-[450px] xl:h-[400px] 
                  ${bg} text-white rounded-xl 
               p-2 sm:p-4 transition-shadow duration-300 ${isActive ? "" : ""}`}
        >
          <p className=" font-medium  mb-8 flex flex-col items-start gap-2">
            <ComaIcon className="w-10 lg:w-28" style={{ color }} />
            <span className="text-sm md:text-base ">{feedback}</span>
          </p>

          <div className="flex items-center leading-relaxed justify-between  ">
            <div className="text-sm">
              <p className="font-bold text-sm md:text-lg">{name}</p>
              <p className="text-sm md:text-base font-light">{position}</p>
              <p className="text-sm md:text-base font-medium">{companyName}</p>
            </div>
            <img
              src={image}
              alt={name}
              className="w-20 h-20 xl:w-36 xl:h-36 xl:-mr-24 lg:h-24 lg:w-24  lg:-mr-14 rounded-full bg-white object-cover border-2 sm:border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
