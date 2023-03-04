/* 
    Warning: Methods usage on this component is depreciated 
    Only argument to use its extremly light weight! 
    (Good Lighthouse Test)
*/
/* 
    TODO: Refactor this to new practices: 
    https://dev.to/_moehab/documentexeccommand-alternative-5a55
    to selection
    http://jsfiddle.net/edisonator/2w35p/35/
*/
import { VStack } from "components/themes/PureBaldrTheme/layout";
import { formSet, fieldKey } from "helpers/P7StateForm";
import { FiBold, FiItalic, FiUnderline } from "react-icons/fi";

interface Props {
  className?: string;
  label?: string;
  form: any[];
  type?: string;
  required?: boolean;
}
export const RichText: React.FC<Props> = ({
  className = "",
  label = "",
  form,
  required = "false",
}) => {
  const prevent = (e: any) => {
    e.preventDefault();
  };

  const commandProvider = (e: any, mode: string) => {
    const editor: any = document.querySelector(".editor");
    editor.contentEditable = true;
    editor.focus();
    document.execCommand(mode);
  };
  return (
    <VStack spacing="xs" className={`relative ${className}`}>
      <label className="text-sm text-gray-600" htmlFor={fieldKey(form)}>
        {label}
      </label>
      
      {/* Editor controls */}
      <div className="flex border-t border-l border-r -mb-2 bg-slate-50 rounded-t-lg">
        <div
          className="font-bold p-3"
          onMouseDown={prevent}
          onClick={(e) => commandProvider(e, "bold")}
        >
          <FiBold />
        </div>
        <div
          className="italic p-3"
          onMouseDown={prevent}
          onClick={(e) => commandProvider(e, "italic")}
        >
          <FiItalic />
        </div>
        <div
          className="italic p-3"
          onMouseDown={prevent}
          onClick={(e) => commandProvider(e, "underline")}
        >
          <FiUnderline />
        </div>
      </div>

      {/* Add required state */}
      {required && (
        <input
          className="h-px opacity-0"
          required
          defaultValue={form[1][form[0]]}
        ></input>
      )}

      {/* Editor body */}
      <div
        className="editor border px-4 py-3 bg-white text-sm rounded-b-lg" 
        suppressContentEditableWarning={true}
        contentEditable={true}
        /* React.KeyboardEvent<HTMLDivElement> is missing */
        onKeyUp={(e: any) => {
          /* sanit <tags> TODO, sanit only paste code */
          formSet(form, e.target.innerHTML.replace(/(<([^>]+)>)/gi, ""));
        }}
      ></div>
      
      {/* Show placeholder */}
      {form[1][form[0]].length == 0 ? (
        <div className="pointer-events-none absolute bottom-0 opacity-30 pl-4 pb-2.5">
          Start typing here...
        </div>
      ) : null}
    </VStack>
  );
};
