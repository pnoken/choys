export default function CardWellbeing({ data }) {
  return (
    <>
      <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-1">
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={data.url}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium"></p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {data.title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {data.description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
