import { useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
export default function Edit_and_Save({ children, text, color, ...props }) {
  const [hoverd, sethoverd] = useState(false);
  const ref = useRef(null);
  return (
    <button
      onMouseEnter={() => sethoverd(true)}
      onMouseLeave={() => sethoverd(false)}
      className={`flex p-1 gap-3 shadow-black shadow-md items-center rounded-full text-black ${
        color || "bg-blue-800"
      }`}
      {...props}
    >
      {children}
      <div
        style={{ width: hoverd ? ref.current?.offsetWidth || 0 : 0 }}
        className="flex items-center justify-center overflow-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className=" flex gap-1 items-center font-bold pr-3">
          <MdEdit /> <div>Edit</div>
        </span>
      </div>
    </button>
  );
}
