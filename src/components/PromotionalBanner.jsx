const PromotionalBanner = ({ title, description }) => {
  return (
    <div className="mt-12 bg-banner bg-opacity-50 bg-contain bg-no-repeat h-[52rem]">
      <div className="flex flex-col justify-start items-start space-y-4 ml-20 pt-60">
        <h2 className="text-white text-8xl font-lobster">{title}</h2>
        <p className="text-white text-3xl font-sans">{description}</p>
      </div>
    </div>
  );
};

export default PromotionalBanner;
