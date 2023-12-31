'use client';
import axios from 'axios';
import styles from './sign.in.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signInHandler = async () => {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_LOGIN_URL,
      {
        email,
        password,
      },
      { withCredentials: true },
    );
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`${styles.contentWrap} noDrag`}>
      <h1 className={styles.title}>SIGN IN</h1>
      <form className={styles.formWrap}>
        <div className="underlineInputWrap">
          <input
            type="text"
            placeholder="이메일을 입력해 주세요."
            autoFocus
            onChange={emailHandler}
          />
          <p></p>
        </div>
        <div className="underlineInputWrap">
          <input
            type="password"
            placeholder="패스워드를 입력해 주세요."
            autoComplete="off"
            onChange={passwordHandler}
          />
          <p></p>
        </div>
      </form>

      <div className={styles.buttonWrap}>
        <button className={styles.signInButton} onClick={signInHandler}>
          로그인
        </button>
        <Link className={styles.smallText} href={'/sign-up'}>
          아직 회원이 아니신가요?
        </Link>
      </div>
    </div>
  );
}
