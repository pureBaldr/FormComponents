import { useRef, useState } from "react";

interface Props {
  className?: string;
  value: string;
  form: [string, any, any];
}
export const Option: React.FC<Props> = ({
  className = "",
  children,
  value = "",
  form,
}) => {
  
  return (
    <label
      className={`${className} ${
        form[1][form[0]] == value ? "bg-blue-50" : "bg-white"
      } flex items-center border-t  cursor-pointer`}
      htmlFor={`${form[0]}_${value}`}
    >
      <input
      
        className="my-3 ml-3 w-4 h-4"
        id={`${form[0]}_${value}`}
        type="radio"
        defaultValue={value}
        // defaultChecked={form[1][form[0]]===value}
       
        checked={form[1][form[0]]===value}
        onClick={(e: any) => {
          let out:any = Object.assign({}, form[1])
          out[form[0]] = value
          form[2](out);
        }}
      />
      <div className="p-3">{children}</div>
    </label>
  );
};
