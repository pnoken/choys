export default function ImageUpload({
  preview,
  selectedFile,
  onSelectFile,
  photo,
  progress,
}) {
  return (
    <div className="py-3 center mx-auto">
      <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
        {progress > 0 && (
          <div>
            <div>
              {progress === 100 ? "Upload Completed" : `Uploding ${progress} %`}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 my-2 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <img
            className="w-auto mx-auto rounded-full object-cover object-center"
            src={
              preview ||
              photo ||
              "https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
            }
            alt="Profile Pic"
          />
        </div>
        <label className="cursor-pointer mt-6">
          <span className="mt-2 text-base leading-normal px-4 py-2 bg-gray-400 text-white text-sm rounded-full">
            {selectedFile ? "Change Image" : "Upload"}
          </span>
          <input
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={onSelectFile}
          />
        </label>
      </div>
    </div>
  );
}
