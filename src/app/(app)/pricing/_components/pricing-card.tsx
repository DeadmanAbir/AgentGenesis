'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PricingCard = ({
  title,
  description,
  price,
  details,
  features,
  buttonText,
}: any) => {
  const handleButtonClick = () => {
    const email = 'agentgenesisdev@gmail.com';
    const subject = `${title} Inquiry`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };
  return (
    <Card className="p-8 flex flex-col h-[610px] rounded-xl items-start justify-between shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] shadow-teal-900">
      <div className="flex flex-col gap-4">
        <div className="dark:text-teal-400 text-teal-500">{title}</div>
        <div className="flex flex-col gap-1">
          <p className="dark:text-gray-200 text-gray-700">{description}</p>
          <div className="text-3xl font-semibold">{price}</div>
        </div>
        <div className="text-base dark:text-gray-200 text-gray-700">
          {details}
        </div>
        <ul className="flex flex-col gap-4 pb-4">
          {features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-600 h-6 w-5 flex-none"
                aria-hidden="true"
              >
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button className="w-full" onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </Card>
  );
};

export default PricingCard;
