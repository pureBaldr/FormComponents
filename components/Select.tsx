import { VStack } from "../layout";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useRef, useState } from "react";
import { useOutsideAlerter } from "pages/_app";
import { useThemeStore } from "../themeStore";

interface Props {
  className?: string;
  label?: string;
  required?: boolean;
  form: any;
  multi?: boolean;
}

interface Open {
  open: boolean;
}

export const Select: React.FC<Props> = ({
  className = "",
  label = "",
  children,
  required = false,
  form,
  multi,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const setAttr = useThemeStore((state: any) => state.setAttr);
  const dropdown = useThemeStore((state: any) => state.theme.dropdown);

  return (
    <div className="w-full">
      {dropdown === form[0] && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 z-10 opacity-10 pointer-events-none"></div>
      )}
      <VStack
        spacing="xs"
        className={`w-full relative ${className}  ${
          dropdown === form[0] ? "z-10" : null
        }`}
      >
        {label && (
          <label className="text-sm text-gray-600">
            {label}
            {required && <span> *</span>}
          </label>
        )}

        {/* dropdown input */}
        <div
          onClick={() => {
            setAttr({
              path: "theme.dropdown",
              value: form[0],
            });
          }}
          className="w-full border p-2.5 text-sm bg-white flex justify-between items-center"
        >
          <div className="flex gap-2 items-center">
            {!multi ? (
              <div className="py-px border border-white">
                {form[1][form[0]] ? form[1][form[0]] : <>&nbsp;</>}
              </div>
            ) : form[1][form[0]].length ? (
              form[1][form[0]].map((el: string, i: number) => (
                <div key={i} className="border rounded px-2 py-px bg-blue-50">
                  {el}
                </div>
              ))
            ) : (
              <div className="py-px border border-white">&nbsp;</div>
            )}
          </div>
          <FiChevronDown />
        </div>

        {/* dropdown body */}
        {dropdown == form[0] && (
          <div ref={wrapperRef} className="absolute z-30 top-1 pt-16 w-full">
            <div
              onClick={() => {
                setAttr({
                  path: "theme.dropdown",
                  value: false,
                });
              }}
              className="absolute right-2 top-7 p-1 mt-px border rounded bg-white cursor-pointer hover:bg-red-50"
            >
              <FiX />
            </div>
            {children}
          </div>
        )}
      </VStack>
    </div>
  );
};
