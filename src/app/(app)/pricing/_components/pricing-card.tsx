import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CircleCheck } from 'lucide-react';

const PricingCard = ({
  title,
  description,
  price,
  details,
  features,
  buttonText,
}: any) => {
  return (
    <Card className="p-8 flex flex-col h-[600px] rounded-xl items-start justify-between shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] shadow-teal-900">
      <div className="flex flex-col gap-4">
        <div className="dark:text-teal-400 text-teal-500">{title}</div>
        <div className="flex flex-col gap-1">
          <p className="dark:text-gray-200 text-gray-700">{description}</p>
          <div className="text-3xl font-semibold">{price}</div>
        </div>
        <div className="text-base dark:text-gray-200 text-gray-700">
          {details}
        </div>
        <ul className="flex flex-col gap-4">
          {features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center gap-1">
              <CircleCheck fill="green" className="text-white h-5 w-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button className="w-full">{buttonText}</Button>
    </Card>
  );
};

export default PricingCard;
