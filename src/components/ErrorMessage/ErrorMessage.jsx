import style from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <div className={style.messageError}>{message}</div>;
};

export default ErrorMessage;
