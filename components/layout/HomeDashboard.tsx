"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaCreditCard,
  FaBook,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard, MdSchool, MdAnnouncement } from "react-icons/md";

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col">
      {/* ===== Header Section ===== */}
      <div></div>
      <div
        className="rounded-2xl flex flex-col md:flex-row justify-between items-center 
             bg-cover bg-center"
        style={{
          backgroundImage: "url('/Frame.png')",
          backgroundPosition: "contain",
        }}
      >
        <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end pr-24 lg:pr-48">
          <div className="w-64 md:w-96 lg:w-[500px] h-64 md:h-96 lg:h-[400px] overflow-hidden drop-shadow-2xl">
            <Image src="/girl.png" alt="Girl" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="flex flex-1">
        {/* ===== Sidebar ===== */}
        <aside className="hidden md:flex flex-col w-64 bg-white mt-6 ml-6 rounded-2xl shadow-md p-6">
          <div className="flex justify-center mt-2 mb-8">
            <Image
              src="/dashboard1.png"
              alt="dashboard1"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="flex items-center mb-8">
            <div className="rounded-xl">
              <Image
                src="/dashboard.png"
                alt="dashboard"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <h2 className="ml-3 text-lg font-semibold text-gray-800">
              Dashboard
            </h2>
          </div>

          <nav className="flex flex-col gap-5">
            <Link
              href="/payment"
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition"
            >
              <Image
                src="/cash.png"
                alt="cash"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Payment Info
            </Link>

            <Link
              href="/registration"
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition"
            >
              <Image
                src="/pencil.png"
                alt="pencil"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Registration
            </Link>

            <Link
              href="/courses"
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition"
            >
              <Image
                src="/notebook.png"
                alt="notebook"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Courses
            </Link>

            <Link
              href="/drop-semester"
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition"
            >
              <Image
                src="/document-x.png"
                alt="document"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Drop Semester
            </Link>

            <Link
              href="/notices"
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition"
            >
              <Image
                src="/equal-circle.png"
                alt="equal-circle"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Notice
            </Link>

            <Link
              href="/schedule"
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition"
            >
              <Image
                src="/annotation.png"
                alt="annotation"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Schedule
            </Link>
          </nav>

          <div className="mt-auto pt-8 border-t">
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition">
              <Image
                src="/contacts-alt.png"
                alt="contacts"
                width={20}
                height={20}
                className="object-contain"
              />{" "}
              Logout
            </button>
          </div>
        </aside>

        {/* ===== Dashboard Content ===== */}
        <main className="flex-1 p-8 space-y-8">
          {/* Welcome */}
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/profile.png"
                alt="profile"
                width={50}
                height={50}
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome Back Vipin Jain!
              </h2>
              <p className="text-gray-500">
                Here’s an overview of your courses
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Total Enrolled", value: "5000" },
              { title: "Active Courses", value: "100" },
              { title: "Completed Courses", value: "20" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-600">{card.title}</h3>
                  </div>
                  <div>
                    <Image
                      src="/image1.png"
                      alt="image1"
                      width={35}
                      height={35}
                      className="object-contain rounded"
                    />
                  </div>
                </div>

                <p className="text-2xl mt-2 text-gray-600">{card.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Courses */}
          <div className="flex gap-6">
          <div className="flex-[5]">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Recent enrolled courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Mobile App Development",
                  progress: 40,
                  lessons: "4/10",
                  image: "/image2.png",
                },
                {
                  title: "Game Development",
                  progress: 20,
                  lessons: "4/20",
                  image: "/image3.png",
                },
              ].map((course) => (
                <div
                  key={course.title}
                  className="bg-white px-6 pb-6 rounded-2xl shadow-md hover:shadow-lg transition max-h-50 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <Image
                      src={course.image}
                      alt="images"
                      width={100}
                      height={100}
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="relative bottom-5">
                    <h4 className="font-semibold text-gray-800">
                      {course.title}
                    </h4>

                    {/* Flex container for progress bar and lessons */}
                    <div className="flex items-center mt-4 space-x-4">
                      {/* Progress Bar */}
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[linear-gradient(to_bottom,#43C6AC,#F8FFAE)] h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>

                      {/* Lessons text */}
                      <p className="text-sm text-gray-500 whitespace-nowrap">
                        {course.lessons} Lessons
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex-[1]">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Daily Progress
                </h3>
                {["Game Development", "UI/UX", "Web Development"].map(
                  (item) => (
                    <div
                      key={item}
                      className="py-2 px-4 mb-2 rounded-lg bg-gray-50 hover:bg-green-50 transition cursor-pointer"
                    >
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  )
                )}
              </div>
              </div>

          {/* Enrolled Courses */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Enrolled Courses
              </h3>
              <Link
                href="/courses"
                className="text-green-500 hover:text-green-700"
              >
                See all
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="min-w-[220px] bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition"
                >
                  <div className="flex gap-4 items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Object Oriented Programming
                      </h4>
                      <button className="mt-4 px-4 py-2 bg-[linear-gradient(to_bottom,#43C6AC,#F8FFAE)] text-white rounded-md hover:bg-green-600 transition">
                        View
                      </button>
                    </div>
                    <div>
                      <Image
                        src="/Group 16.png"
                        alt="Group 16"
                        width={150}
                        height={150}
                        className="object-contain rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
