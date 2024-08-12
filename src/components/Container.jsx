/* eslint-disable react/prop-types */
export const Container = ({ children, className }) => {
  const baseClassName = "flex h-auto max-w-screen-2xl mx-auto w-full";
  return <div className={`${baseClassName} ${className}`}>{children}</div>;
};
