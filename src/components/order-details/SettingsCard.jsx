import React from "react";

export default function SettingsCard() {
  return (
    <div className="-mx-4 p-4 bg-white shadow sm:rounded-lg space-y-2 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg ">
      <div className="text-lg/6 font-medium sm:text-sm">Publish Options</div>
      <fieldset>
        <legend className="sr-only">Notifications</legend>
        <div className="space-y-3">
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                aria-describedby="comments-description"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="text-gray-900">
                Comments
              </label>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                aria-describedby="candidates-description"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="candidates" className="text-gray-900">
                Candidates
              </label>
            </div>
          </div>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                aria-describedby="offers-description"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="offers" className="text-gray-900">
                Offers
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
