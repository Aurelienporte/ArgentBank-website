import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./FormWrapper.css";

import { useSelector } from "react-redux";

function FormWrapper({ title, submit, children }) {
  const error = useSelector((state) => state.form.hasError);
  return (
    <section
      className={error ? "sign-in-content form-error" : "sign-in-content"}
    >
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>{title}</h1>
      <form onSubmit={submit}>{children}</form>
    </section>
  );
}

export default FormWrapper;
