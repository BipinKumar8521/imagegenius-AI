import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <p>Home</p>

      <UserButton afterSignOutUrl="/sign-up" showName />
    </div>
  );
};

export default Home;
