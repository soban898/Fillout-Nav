import flag from "../assets/images/flag.svg";
import square from "../assets/images/square.svg";
import clipboard from "../assets/images/clipboard.svg";
import trash from "../assets/images/trash.svg";
import pencil from "../assets/images/pencil.svg";

export default function TabDropdown({ visible }) {
  return (
    <div
      className={`absolute bottom-full left-0 mb-2 w-48 border border-gray-200 rounded-md shadow-lg z-50 transform transition-all duration-200 origin-bottom bg-white ${
        visible ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
      }`}
    >
      {/* Settings Header */}
      <div className="px-4 py-2 bg-[#FAFBFC] text-[#5E6C84] border-b border-[#E1E1E1] text-sm font-medium">
        Settings
      </div>

      {/* Dropdown Options */}
      <ul className="text-sm text-[#1A1A1A]">
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <img src={flag} alt="" /> Set as first page
        </li>
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <img src={pencil} alt="" /> Rename
        </li>
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <img src={clipboard} alt="" /> Copy
        </li>
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <img src={square} alt="" /> Duplicate
        </li>

        <hr className="border-t border-[#E1E1E1] my-1" />

        <li className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
          <img src={trash} alt="" /> Delete
        </li>
      </ul>
    </div>
  );
}
