'use client';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex-center w-full flex-1">
      <SignUp fallbackRedirectUrl="/welcome" forceRedirectUrl="/welcome" />
    </div>
  );
};

export default SignUpPage;
