"use client";

import Image from "next/image";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { HiOutlineGif } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { useRef } from "react";

import Button from "../components/Button"; // Importando o componente de botão
import Post from "../components/Post"; // Importando o componente de post

export default function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-row justify-items-center items-center min-h-screen">
      <header className="md:w-2/4 min-h-screen">menu</header>
      <main className="border-neutral-800 border-r-2 border-l-2 w-full min-h-screen">
        <section className="flex border-neutral-800 border-b-2 w-full min-h-14 slect-feed">
          <a href="" className="flex flex-col justify-center items-center w-1/2 active option-feed">
            <p className="font-semibold text-sm">For You</p>
            <div className="borda"></div>
          </a>
          <a href="" className="flex flex-col justify-center items-center w-1/2 option-feed">
            <p className="font-semibold text-sm">Following</p>
            <div className="borda"></div>
          </a>
        </section>
        <section className="flex justify-center gap-2 border-neutral-800 px-4 py-4 border-b-2 w-full min-h-16 post-form">
          <section className="bg-neutral-800 rounded-full w-[50px] h-[50px] user-img">
            <Image src="/img/user.png" alt="user" width={100} height={100} />
          </section>
          <section className="py-1 w-[90%] form">
            <form action="">
              <div className="flex flex-col gap-4 border-neutral-800 px-2 pb-4 border-b-2 w-full">
                <textarea
                  ref={textareaRef}
                  onInput={handleInput}
                  name=""
                  id=""
                  title="Input field"
                  placeholder="What is happening?!"
                  className="resize-none"
                />
                <a className="flex items-center gap-1 font-bold text-sm replace-private" href="">
                  <IoGlobeOutline className="icon" />
                  <p>Everyone can reply</p>
                </a>
              </div>
              <div className="flex justify-between gap-2 mt-2 p-1">
                <section className="flex gap-4 text-primary">
                  <a href="#"><FaRegImage className="icon" /></a>
                  <a href="#"><HiOutlineGif className="icon" /></a>
                  <a href="#"><IoLocationOutline className="icon" /></a>
                </section>
                <Button type="submit">Post</Button> {/* Usando o componente de botão */}
              </div>
            </form>
          </section>
        </section>
        <section className="posts">
          <Post
            userImage="/img/user.png"
            userName="John Doe"
            content="This is a sample post content."
            likes={10}
            comments={5}
            shares={2}
            reach={100}
          />
          <Post
            userImage="/img/user.png"
            userName="Jane Smith"
            content="Another example of a post content."
            likes={20}
            comments={10}
            shares={5}
            reach={200}
          />
        </section>
      </main>
      <footer className="md:flex hidden w-2/3 min-h-screen">footer</footer>
    </div>
  );
}
