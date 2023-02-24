import styles from "./form.module.css";
import { useState } from "react";
import { validate } from "./validate";

function Form({login}) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [password] = useState('password')

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validate({...userData, [e.target.name]: e.target.value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
      <div className={styles.passFhater}>
      <label htmlFor="username" className={styles.item}>
        Username:
      </label>
      <input
        id="username"
        name="username"
        type="text"
        value={userData.username}
        className={styles.input}
        onChange={handleInputChange}
      />
      </div>
      <p className={styles.p}>{errors.username}</p>
      <div className={styles.passFhater}>
      <label htmlFor="password" >
        Password:
      </label>
      <input   
        id="password"
        name="password"
        type={password}
        value={userData.password}
        className={styles.input}
        onChange={handleInputChange}
      />
      </div>
      
      <p className={styles.p}>{errors.password}</p>
      <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Form;
