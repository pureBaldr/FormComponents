import { useState } from "react";

export const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="border-t border-r border-l p-3 text-sm relative">
        {!selectedImage && <p>Upload and Display Image usign React Hook's</p>}
        {selectedImage && (
          <div>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button
              className="p-3 absolute top-6 left-6 text-white rounded bg-red-500"
              onClick={() => setSelectedImage(null)}
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <input
        className="border w-full bg-white
        file:mr-3 file:py-3 file:px-10 file:border-0
        file:text-md  hover:file:cursor-pointer hover:file:opacity-80
     "
        type="file"
        name="myImage"
        onChange={(e: any) => {
          console.log(e.target.files[0]);
          setSelectedImage(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
