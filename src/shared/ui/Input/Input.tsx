import { forwardRef, type FC, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col items-start gap-y-1 w-full">
        <span className="inline-block">{label}</span>
        <div className="flex flex-col w-full">
          <input
            className="text-white bg-secondary px-2 py-1 rounded-md w-full outline-0"
            {...props}
            ref={ref}
          />
          {error && (
            <span className="pl-2 pt-1 text-sm text-red-500">{error}</span>
          )}
        </div>
      </div>
    );
  }
);
