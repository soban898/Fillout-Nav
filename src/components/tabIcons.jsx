import React from "react";

export default function getTabIcon(tab, isActive) {
  const stroke = isActive ? "#F59D0E" : "#8C93A1";
  const fill = isActive ? "#F59D0E" : "#8C93A1";

  if (tab === "Info") {
    return (
      <svg width="20" height="20" fill="none" className="mr-1 w-5 h-5" viewBox="0 0 20 20">
        <path
          d="M8.95768 9.1665H9.99934L9.99935 13.5415M17.7077 9.99984C17.7077 14.257 14.2565 17.7082 9.99935 17.7082C5.74215 17.7082 2.29102 14.257 2.29102 9.99984C2.29102 5.74264 5.74215 2.2915 9.99935 2.2915C14.2565 2.2915 17.7077 5.74264 17.7077 9.99984Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="6.666" r="0.75" fill={fill} />
      </svg>
    );
  }

  if (tab === "Details" || tab === "Other") {
    return (
      <svg width="20" height="20" fill="none" className="mr-1 w-5 h-5" viewBox="0 0 20 20">
        <path
          d="M10.28 2.291H4.792a.833.833 0 0 0-.833.833v13.75c0 .46.373.833.833.833h10.417a.833.833 0 0 0 .833-.833V8.053a.833.833 0 0 0-.244-.59l-4.928-4.928a.833.833 0 0 0-.59-.244Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.291 11.041h2.917M7.291 14.375h5.417M10.625 2.708V6.875a.833.833 0 0 0 .833.833h4.167"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tab === "Ending") {
    return (
      <svg width="20" height="20" fill="none" className="mr-1 w-5 h-5" viewBox="0 0 20 20">
        <path
          d="M12.5 7.917 8.75 12.5 7.083 10.833M17.708 10c0 4.257-3.451 7.708-7.708 7.708-4.257 0-7.708-3.451-7.708-7.708C2.292 5.743 5.743 2.292 10 2.292c4.257 0 7.708 3.451 7.708 7.708Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}
