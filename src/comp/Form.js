import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z ]+$/;

export default function Form() {
  const { setUserName } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (name.length < 2 || !nameRegex.test(name)) {
      newErrors.name = 'השם חייב להיות לפחות 2 תווים ויכול להכיל רק אותיות באנגלית ורווחים.';
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'כתובת אימייל לא תקינה.';
    }

    if (email !== confirmEmail) {
      newErrors.confirmEmail = 'האימיילים אינם תואמים.';
    }

    if (password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להיות לפחות 6 תווים.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setUserName(name);
      alert('הטופס נשלח בהצלחה!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>שם:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>אימייל:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>אימייל חוזר:</label>
          <input
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          {errors.confirmEmail && <p style={{ color: 'red' }}>{errors.confirmEmail}</p>}
        </div>
        <div>
          <label>סיסמה:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">שלח</button>
      </form>
    </div>
  );
}
