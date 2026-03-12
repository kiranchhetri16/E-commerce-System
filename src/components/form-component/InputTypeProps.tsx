    import React from "react";

    interface InputTypeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string; 
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    }

    export const InputType: React.FC<InputTypeProps> = ({
    label,
    id,
    type = "text",
    name,
    value,
    placeholder,
    handleInputChange,
    error,
    ...rest
    }) => {
    const inputId = id || name; 

    return (
        <div className="flex flex-col gap-1">
        {label && (
            <label htmlFor={inputId} className="text-text text-sm font-normal font-primary">
            {label}
            </label>
        )}
        <input
            id={inputId}
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
        
            className=
            {`text-text text-sm placeholder:text-sm font-normal font-primary px-3 py-2 border border-border rounded-sm 
                    focus:outline-2 focus:outline-primary focus:ring-1 focus:ring-primary transition-all no-spinner appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none duration-150 ${error ? "border-red-500" : ""}`}
            {...rest}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
    };
