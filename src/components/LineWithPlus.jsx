export default function LineWithPlus() {
  return (
    <div className="group relative w-[30px] h-[10px] flex items-center justify-center transition-all duration-200 hover:w-[60px] hover:mx-2">
      <div className="w-full h-[2px] bg-[repeating-linear-gradient(to_right,#d1d5db_0px,#d1d5db_4px,transparent_4px,transparent_8px)] group-hover:h-[4px] group-hover:bg-[repeating-linear-gradient(to_right,#9ca3af_0px,#9ca3af_4px,transparent_4px,transparent_8px)] transition-all duration-200"></div>
      <button className="absolute bg-white border border-gray-300 rounded-full w-5 h-5 text-sm hidden items-center justify-center top-[-5px] group-hover:flex transition-opacity duration-200">
        {/* Optional: ensures consistent sizing */}
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00039 2.3999C8.21256 2.3999 8.41605 2.48419 8.56608 2.63422C8.7161 2.78425 8.80039 2.98773 8.80039 3.1999V7.1999H12.8004C13.0126 7.1999 13.216 7.28419 13.3661 7.43422C13.5161 7.58425 13.6004 7.78773 13.6004 7.9999C13.6004 8.21208 13.5161 8.41556 13.3661 8.56559C13.216 8.71562 13.0126 8.7999 12.8004 8.7999H8.80039V12.7999C8.80039 13.0121 8.7161 13.2156 8.56608 13.3656C8.41605 13.5156 8.21256 13.5999 8.00039 13.5999C7.78822 13.5999 7.58473 13.5156 7.43471 13.3656C7.28468 13.2156 7.20039 13.0121 7.20039 12.7999V8.7999H3.20039C2.98822 8.7999 2.78473 8.71562 2.63471 8.56559C2.48468 8.41556 2.40039 8.21208 2.40039 7.9999C2.40039 7.78773 2.48468 7.58425 2.63471 7.43422C2.78473 7.28419 2.98822 7.1999 3.20039 7.1999H7.20039V3.1999C7.20039 2.98773 7.28468 2.78425 7.43471 2.63422C7.58473 2.48419 7.78822 2.3999 8.00039 2.3999Z"
            fill="#1A1A1A"
          />
        </svg>
      </button>
    </div>
  );
}
