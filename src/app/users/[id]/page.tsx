"use client";

import type { TUser } from "@/types/user";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getUserByUsername } from "@/services/getUserByUsername";

import { UserNavbar } from "@/components/navbars/UsersNavbar";
import { HomeFooter } from "@/components/footers/HomeFooter";

import { Tabs, Tab } from "@nextui-org/tabs";

import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Avatar } from "@nextui-org/avatar";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    getUserByUsername(id as string).then((data) => setUser(data));
  }, []);

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <UserNavbar
        firstName={user?.firstName as string}
        lastName={user?.lastName as string}
      />
      <article className="md:w-[600px] overflow-hidden w-full">
        <div className="h-36 w-full sm:h-52">
          <div className="h-full bg-[#333639]"></div>
        </div>

        <div className="flex flex-col gap-3 px-4 py-3">
          <Avatar
            className="absolute bg-[#333639] w-24 h-24 sm:w-36 sm:h-36 -translate-y-1/2 -mt-3 overflow-hidden rounded-full border-4 border-solid border-black"
            src={user?.image as string}
            size="sm"
          />
          <div className="flex justify-end">
            <button className="px-4 py-1.5 text-bold border border-solid  border-[#536471] rounded-full">
              Edit profile
            </button>
          </div>
          <div className="flex flex-col">
            <a className="flex items-center gap-1 truncate font-bold pointer-events-none -mb-1 text-xl">
              <p className="truncate md:mt-6">
                {user?.firstName} {user?.lastName}
              </p>
            </a>

            <p className="text-[#71767B]">@{id}</p>
          </div>
          <div className="flex text-[#71767B] gap-1 items-center">
            <HiOutlineCalendarDays className="w-5 h-5" />
            <p className="">Joined November 2023</p>
          </div>
          <div className="flex gap-4">
            <a className="flex mt-0.5 mb-[3px] h-4 items-center gap-1">
              <p className="text-sm">0</p>{" "}
              <p className="text-[#71767B]">Following</p>
            </a>
            <a className="flex mt-0.5 mb-[3px] h-4 items-center gap-1">
              <p className="text-sm">0</p>{" "}
              <p className="text-[#71767B]">Followers</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Tabs key="options" variant="underlined" color="primary">
            {["Tweets", "Tweets & Replies", "Media", "Likes"].map((tab) => (
              <Tab key={tab} title={tab}>
                <div className="flex flex-col gap-2 text-center p-8 min-h-[580px]">
                  <p className="text-3xl font-extrabold">
                    @{id} hasn't tweeted
                  </p>
                  <p className="text-[#71767B]">
                    When they do, their Tweets will show up here.
                  </p>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </article>

      <HomeFooter />
    </main>
  );
}
