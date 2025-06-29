// PageNavBar1.jsx
import { useState, useRef, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import TabItem from "./TabItem";


const initialTabs = ["Info", "Details", "Other", "Ending"];

export default function PageNavBar1() {
  const [activePage, setActivePage] = useState("Info");
  const [openDropdownTab, setOpenDropdownTab] = useState(null);
  const [tabs, setTabs] = useState(initialTabs);
  const dropdownRefs = useRef({});

  const handleDropdownToggle = (tab, e) => {
    e.stopPropagation();
    setOpenDropdownTab((prev) => (prev === tab ? null : tab));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tabs.indexOf(active.id);
      const newIndex = tabs.indexOf(over.id);
      setTabs((tabs) => arrayMove(tabs, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isInsideAny = Object.values(dropdownRefs.current).some((ref) =>
        ref?.contains(e.target)
      );
      if (!isInsideAny) setOpenDropdownTab(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white px-4 py-3 border-t border-gray-200 z-50 flex justify-start">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tabs} strategy={horizontalListSortingStrategy}>
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <TabItem
                key={tab}
                id={tab}
                tab={tab}
                isActive={activePage === tab}
                onClick={() => setActivePage(tab)}
                isDropdownOpen={openDropdownTab === tab}
                toggleDropdown={handleDropdownToggle}
                refEl={(el) => (dropdownRefs.current[tab] = el)}
              />
            ))}

           
           <button
  className="flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-400 bg-white text-black shadow-md cursor-pointer"
  disabled
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    className="mr-1 -mt-[2px]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4.167a.833.833 0 0 1 .833.833v4.167h4.167a.833.833 0 1 1 0 1.666H10.833v4.167a.833.833 0 1 1-1.666 0V10.833H5a.833.833 0 1 1 0-1.666h4.167V5a.833.833 0 0 1 .833-.833Z"
      fill="#1A1A1A"
    />
  </svg>
  Add page
</button>

          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
