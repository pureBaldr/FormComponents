import { mixClass, transition } from "helpers/P7mixClass";
import { formGet, formSet, fieldKey } from "helpers/P7StateForm";
import { VStack } from "../layout";

interface Props {
  className?: string;
  label?: JSX.Element;
  form: any[];
  type?: string;
  icon?: any;
}
export const CheckBox: React.FC<Props> = ({
  className = "",
  label = "",
  icon,
  form,
  type = "text",
}) => {
  return (
    <div  className="flex items-start">
      <input
        id={fieldKey(form)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          formSet(form, !formGet(form))
        }
        type="checkbox"
        checked={formGet(form)}
        // defaultValue={formGet(form)}
        // value={formGet(form)}
        className={mixClass({
          ["min-w-[1.4em] min-h-[1.4em] text-blue-700 bg-gray-100 border-gray-300"]: true,
          ...transition(),
        })}
      />
      <label htmlFor="disabled-checkbox" className="ml-3.5 text-sm">
        {label}
      </label>
    </div>
  );
};
