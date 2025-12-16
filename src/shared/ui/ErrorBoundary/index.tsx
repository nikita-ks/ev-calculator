import type { ReactNode } from "react";

type TCommonErrorHandlerProps = {
  error: Error;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetErrorBoundary?: (...args: any[]) => void;
};

const isDevelopment = import.meta.env.DEV;

/**
 * Used to display a user-friendly error message when an error is caught by an error boundary.
 * It also provides additional error details in development mode (e.g., stack trace, error message).
 *
 * @param props - The component's props containing the `error` and `resetErrorBoundary` function
 * @returns The error UI, showing an error message and allowing the user to retry the action
 */
export function CommonErrorHandler(props: TCommonErrorHandlerProps): ReactNode {
  const { error, resetErrorBoundary } = props;

  // TODO: Change UI when design will be ready
  return (
    <div>
      <h3>Something went wrong.</h3>
      {isDevelopment && (
        <>
          <ul>
            <li key={error.message}>{error.message}</li>
          </ul>
          <pre>{error.stack}</pre>
        </>
      )}
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}
