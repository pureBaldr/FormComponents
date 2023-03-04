import { mixClass } from "helpers/P7mixClass";
import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { VStack } from "../layout";

interface Props {
  className?: string;
  label?: string;
  description?: string;
  form: any[];
  type?: string;
  icon?: any;
  required?: boolean;
  placeholder?: string;
  defaultValue?: boolean;
  readOnly?: boolean;
}
export const Input: React.FC<Props> = ({
  className = "",
  label = "",
  description = "",
  icon,
  form,
  type = "text",
  required = false,
  readOnly = false,
  placeholder,
  defaultValue = true, 
}) => {
  return (
    <VStack spacing="xs" className={className}>
      {label && (
        <label className="text-sm text-gray-600" htmlFor={fieldKey(form)}>
          {label}
          {required && <span> *</span>}
        </label>
      )}

      <div className="relative">
        <input
          readOnly={readOnly}
          placeholder={placeholder}
          required={required}
          className={mixClass({
            "rounded-lg border text-sm py-3.5 w-full transition duration-150 ease-in-out outline-gray-300":
              true,
            "px-4": !icon,
            "pl-9 pr-4": icon,
            "opacity-50": readOnly,
          })}
          id={fieldKey(form)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formSet(form, e.target.value)
          }
          defaultValue={formGet(form)} 
          type={type}
        />
        {icon ? (
          <div className="absolute top-3.5 left-3 text-gray-400">{icon}</div>
        ) : null}
      </div>
      {description && <p className="text-xs">{description}</p>}
    </VStack>
  );
};
export default Input;
