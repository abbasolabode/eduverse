import { ImSpinner9 } from "react-icons/im";

export default function Spinner() {
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center w-full justify-center h-[30rem] bg-white bg-opacity-30 p-6 rounded-lg shadow-sm">
              <ImSpinner9 className="text-4xl animate-spin text-blue-500 mb-3" />
              <p className="text-lg font-poppins text-gray-700">Loading Academic Programs, Please wait...</p>
          </div>
      </div>
  )
}
