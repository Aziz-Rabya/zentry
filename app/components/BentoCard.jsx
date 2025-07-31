import React from "react";

const BentoCard = ({
  title,
  description,
  subtitle,
  subdescription,
  bg = "bg-white",
  textColor = "text-black",
  media,
  content,
  titleSize = "text-xl",
  descriptionSize = "text-2xl",
  subtitleSize = "text-md",
  subdescriptionSize = "text-sm",
}) => {
  return (
    <div className={`${bg} ${textColor} p-6 rounded-2xl h-full flex flex-col`}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className={`${titleSize} font-bold`}>{title}</h3>}
          {description && (
            <div className={`${descriptionSize} font-bold mt-2`}>
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          )}
          {subtitle && <p className={`${subtitleSize} mt-2`}>{subtitle}</p>}
          {subdescription && (
            <p className={`${subdescriptionSize} text-gray-500 mt-1`}>
              {subdescription}
            </p>
          )}
        </div>
      )}
      
      {content && <div className="flex-grow">{content}</div>}
      
      {media && <div className="mt-auto">{media}</div>}
    </div>
  );
};

export default BentoCard;