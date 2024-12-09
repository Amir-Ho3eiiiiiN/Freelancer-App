import { XMarkIcon } from "@heroicons/react/16/solid";
// import useOutSideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  // const ref = useOutSideClick(onClose); ref={ref} to div
  return (
    open && (
      <div
        onClick={onClose}
        className="fixed top-0 left-0 z-50 w-screen h-screen bg-opacity-30 bg-secondary-500 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed p-4 transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg top-1/2 left-1/2 bg-secondary-0  w-[calc(100vw-2rem)] max-w-screen-xs overflow-y-auto max-h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-primary-600 scrollbar-track-primary-200"
        >
          <div className="flex items-center justify-between pb-2 mb-6 border-b border-b-secondary-300">
            <p className="text-base font-bold text-secondary-700">{title}</p>
            <button onClick={onClose}>
              <XMarkIcon className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
