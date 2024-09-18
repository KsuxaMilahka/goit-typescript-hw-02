import style from './ErrorMessage.module.css';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={style.messageError}>{message}</div>;
};

export default ErrorMessage;
