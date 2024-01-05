import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Disclosure({ title, children }: { title: string; children: any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="mt-4 cursor-pointer rounded-md bg-white p-5 md:text-xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-black">{title}</span>
        <FaChevronDown className={isOpen ? "rotate-180 transform" : ""} size="17px" />
      </div>

      {isOpen && <div className="mt-3 text-lg text-gray-700">{children}</div>}
    </li>
  );
}
