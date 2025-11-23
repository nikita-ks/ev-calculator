import { forwardRef, type FC, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  currentValue?: number;
  valueUnit?: string;
  error?: string;
};
export const InputRange: FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(({ label, currentValue, valueUnit, error, ...props }, ref) => {
  return (
    <div className="flex flex-col items-start gap-y-1 w-full">
      <span className="inline-block">{label}</span>
      <div className="flex items-center gap-x-4 w-full">
        <input
          className="w-full input-range-primary"
          {...props}
          ref={ref}
          type="range"
        />
        {currentValue && (
          <span className="text-md text-text-secondary">
            {currentValue}
            {valueUnit}
          </span>
        )}
      </div>
      {error && <span className="pl-2 pt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
});
