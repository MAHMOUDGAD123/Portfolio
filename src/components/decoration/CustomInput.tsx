import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLInputTypeAttribute, useState } from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  htmlFor?: string;
  isTextArea?: boolean;
  errorMessage?: string;
}

interface State {
  errorMessage?: string;
  value: string;
}

export default function CustomInput({
  type,
  name,
  id,
  placeholder,
  required,
  htmlFor,
  isTextArea,
  errorMessage,
}: Props) {
  const [state, setState] = useState<State>(() => ({
    errorMessage,
    value: "",
  }));

  return (
    <div className="relative flex flex-col gap-[7px] [&>[name]]:bg-[light-dark(#ffffff90,#00000090)]">
      {htmlFor && <label htmlFor={htmlFor}>{htmlFor?.toUpperCase()}</label>}

      {isTextArea ? (
        <textarea
          className="h-[150px] resize-none overflow-y-auto rounded-[10px] p-[10px_15px] motion-reduce:animate-none"
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          autoComplete="on"
          value={state.value}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
      ) : (
        <input
          className="rounded-[10px] p-[10px_15px]"
          id={id}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          autoComplete="on"
          value={state.value}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
      )}

      {errorMessage && (
        <div
          className="absolute bottom-[-23px] ml-[5px] flex w-full items-center gap-[5px]"
          tabIndex={-1}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-[14px] text-dodgerblue"
          />
          <span
            className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[10px] font-extrabold text-SecTextCol"
            title={errorMessage}
          >
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
}
