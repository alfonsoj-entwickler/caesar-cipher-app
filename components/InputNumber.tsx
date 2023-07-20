"use client";
import useCeaser from "@/hooks/useCeaser";
import { MAX_ROTATION } from "@/helpers";

const InputNumber = () => {
  const { rotation, handlePlusRotation, handleMinusRotation }: any =
    useCeaser();

  return (
    <div className="w-full h-full flex justify-center items-center gap-4">
      <button
        type="button"
        className={`cursor-pointer ${ rotation === MAX_ROTATION ? "opacity-30": ""}`}
        onClick={() => handlePlusRotation()}
        disabled={rotation === MAX_ROTATION}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <p className="w-32 flex flex-col text-4xl md:text-6xl lg:text-8xl text-center font-semibold">
        {rotation}
        <span className="text-xs uppercase font-light">Rotation</span>
      </p>
      <button
        type="button"
        className={`cursor-pointer ${ rotation === 0 ? "opacity-30": ""}`}
        onClick={() => handleMinusRotation()}
        disabled={rotation === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputNumber;
