"use client";
import { signIn } from "next-auth/react";
import { BsGoogle, BsGithub } from "react-icons/bs";

const SocialSignin = () => {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => signIn("google")}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <BsGoogle /> Continue with Google
      </button>
      <button
        onClick={() => signIn("github")}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <BsGithub /> Continue with GitHub
      </button>
    </div>
  );
};

export default SocialSignin;
