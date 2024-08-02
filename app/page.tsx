'use client';
import Image from "next/image";
import { useState } from 'react';
import LanguageSwitcher from "./lib/components/LanguageSwitcher";
import RoundCheckbox from "./lib/components/RoundCheckbox";

export default function LandingPage() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-black flex flex-col items-center md:px-[111px] p-6">
      <header className="w-full mt-[42px] p-4 flex justify-between items-center gap-[10px]">
        <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="My Streaming Platform Logo"
              width={62}
              height={62}
              priority
            />
            <h1 className="text-3xl font-bold">My Streaming Platform</h1>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="bg-transparent border-2 border-green-500 px-12 py-2 rounded-2xl text-[#DCDCDC] hover:bg-white/10">Login</button>
        </div>
      </header>

      <main className="flex flex-1 flex-col md:flex-row w-full mt-24 md:mt-0 p-6">
        <section className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-left text-center">
            Get Instant Access to Endless Entertainment.
          </h1>
        </section>

        <section className="flex-1 flex items-center justify-end">
          <div className="p-4 md:w-3/5 rounded-lg shadow-lg w-full text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5251F6] to-[#00FF99] mb-2">Welcome!</h2>
            <p className="mb-6">Join the Streaming Paradise!</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 bg-[#1C1C1C] rounded-md placeholder-gray"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-[#1C1C1C] rounded-md placeholder-gray"
              />
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 bg-[#1C1C1C] rounded-md placeholder-gray"
              />
              <div className="space-y-8">
                <div className="flex items-center space-x-2">
                  <RoundCheckbox label="" />
                  <label htmlFor="terms" className="ms-1 text-sm text-[#414141] text-left rounded">
                    By signing up, you agree to X's{' '} <br />
                    <a href="#" className="underline text-[#757575]">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="underline text-[#757575]">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RoundCheckbox label="" />
                  <label htmlFor="communications" className="ms-1 text-sm text-[#414141] text-left">
                    I accept the communication policies.
                  </label>
                </div>
                <button className="w-full py-3 bg-[#00FF99] rounded-md font-bold text-black">
                  Sign up
                </button>
              </div>
            </form>

            <div className="mt-8 mb-4 flex items-center justify-center text-[#747474] px-3">
                <span className="grow h-[1px] bg-[#747474] my-1" />
                <span className="whitespace-nowrap px-3">or continue with</span>
                <span className="grow h-[1px] bg-[#747474] my-1" />
            </div>
            <div className="flex justify-center space-x-14 px-12">
              <Image
                src="/google_icon.svg"
                alt="Sign in by Google"
                width={43}
                height={43}
                priority
              />
              <Image
                src="/fb_icon.svg"
                alt="Sign in by FB"
                width={43}
                height={43}
                priority
              />
              <Image
                src="/fb_icon.svg"
                alt="Sign in by FB"
                width={43}
                height={43}
                priority
              />
            </div>
            <div className="mt-4 text-sm text-center text-[#5A5A5A]">
              Already have an account?{' '}
              <a href="#" className="ml-1 text-[#05955C]">
                Login
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
