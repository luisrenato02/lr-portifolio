interface BadgeProps {
  color: string;
  title: string;
}
export const Badge = ({ color, title }: BadgeProps) => {
  return (
    <>
      {color === "gray" ? (
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300 flex place-content-center">
          {title}
        </span>
      ) : (
        <span
          className={`bg-${color}-100 text-${color}-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-${color}-900 dark:text-${color}-300 flex place-content-center`}
        >
          {title}
        </span>
      )}
    </>
  );
};
