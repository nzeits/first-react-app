import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  //ReactNode allows us to pass HTML content in the App.tsx for our component
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
