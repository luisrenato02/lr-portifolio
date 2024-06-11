interface SelectTabProps {
  date: string;
  title: string;
  description: string;
}
export const SelectTab = ({ date, title, description }: SelectTabProps) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      {date && (
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {date}
        </time>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {title}
        </h3>
      )}
      {description && (
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </li>
  );
};
