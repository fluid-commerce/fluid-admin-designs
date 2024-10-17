import { useState } from "react";

import ImageUpload from "../global/ImageUpload";
import TextDropdown from "../global/TextDropdown";
import Dropdown from "../global/Dropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";

export default function EditingCard() {
  const [productTitle, setProductTitle] = useState("Apple Vision Pro");
  console.log(productTitle);
  return (
    <div className="-mx-4 p-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg">
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Product Title
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder="Apple Vision Pro"
          value={productTitle}
          onChange={(e) => {
            console.log(e.target.value);
            setProductTitle(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="images"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Images
        </label>
        <div className="flex flex-row space-x-2">
          <img
            src={dummyProductImage}
            alt="Product Image"
            className="w-1/2 h-auto object-cover"
          />
          <ImageUpload />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Short Description
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={2}
          placeholder="Description here..."
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Full Description
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          placeholder="Description here..."
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <TextDropdown />
      </div>
    </div>
  );
}
