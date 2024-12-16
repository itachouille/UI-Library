'use client';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex-center w-full flex-1">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
