import { GripVertical, MoreHorizontal } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TabDropdown from "./TabDropdown";
import getTabIcon from "./tabIcons";
import LineWithPlus from "./LineWithPlus";

export default function TabItem({
  id,
  tab,
  isActive,
  onClick,
  isDropdownOpen,
  toggleDropdown,
  refEl,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const Icon = getTabIcon(tab, isActive);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={(el) => {
        setNodeRef(el);
        refEl?.(el);
      }}
      style={style}
      className="flex items-center relative"
    >
      <div
        className={`group flex items-center px-3 py-1.5 text-sm font-medium transition-all cursor-pointer rounded-md border ${
          isActive
            ? "bg-white border-gray-400 shadow-md text-black"
            : "border-gray-300 bg-[rgba(157,164,178,0.15)] text-[#677289] hover:bg-[rgba(157,164,178,0.35)] shadow-[25px_7px_1px_rgba(0,0,0,0.02),0px_10px_7px_2px_rgba(0,0,0,0.04)]"
        }`}
        onClick={onClick}
      >
        {/* ✅ DRAG HANDLE - grip icon */}
        <span
          className="cursor-grab mr-1 flex items-center"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={12} className="text-gray-400" />
        </span>

        {/* Actual Tab Icon */}
        {Icon}
        <span>{tab}</span>

        <button
          onClick={(e) => toggleDropdown(tab, e)}
          className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      <TabDropdown visible={isDropdownOpen} />
      <LineWithPlus />
    </div>
  );
}
