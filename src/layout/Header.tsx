import { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import * as Ci from 'react-icons/ci';
import ModalWindowV2 from '../components/ModalWindowV2';
import SignupForm from '../features/auth/SignupForm';
import LoginForm from '../features/auth/LoginForm';

const Header = () => {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      <div className="h-12 bg-cyan-600 text-white text-sm p-2 flex flex-row justify-between items-center md:px-20">
        <div className="hidden sm:flex flex-row justify-start gap-4">
          <div className="flex flex-row items-center gap-1">
            <BsTelephone />
            <span>+254727533551</span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Ci.CiMail />
            <span>contact@northRift.co.ke</span>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row w-full justify-end items-center gap-3">
            <div onClick={() => setLogIn(true)} className="flex flex-row items-center gap-1 cursor-pointer">
              <Ci.CiLock />
              <span>Log in</span>
            </div>

            <div onClick={() => setSignUp(true)} className="flex flex-row items-center gap-1 cursor-pointer">
              <Ci.CiUser />
              <span>Sign Up</span>
            </div>
          </div>
        </div>
      </div>

      {
        <>
          <ModalWindowV2 isOpen={logIn} onClose={() => setLogIn(false)}>
            {<LoginForm />}
          </ModalWindowV2>

          <ModalWindowV2 isOpen={signUp} onClose={() => setSignUp(false)}>
            {<SignupForm />}
          </ModalWindowV2>
        </>
      }
    </>
  );
};

export default Header;
