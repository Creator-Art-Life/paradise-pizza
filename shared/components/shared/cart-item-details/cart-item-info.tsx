import { cn } from "@/shared/lib/utils";

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name, details, className }) => {
  // Функция для обрезки строки до 25 символов
  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details && (
        <p className="text-xs text-gray-400 mt-1 leading-5">
          <span className="block laptop:hidden">
            {truncateText(details, 25)} {/* Обрезка для мобильных экранов */}
          </span>
          <span className="max-md:hidden">
            {truncateText(details, 60)} {/* Полное описание для больших экранов */}
          </span>
        </p>
      )}
    </div>
  );
};
