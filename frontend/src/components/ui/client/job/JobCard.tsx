"use client";

import React from "react";
import Image from "next/image";
import { Bookmark, Clock, DollarSign, MapPin, Star } from "lucide-react";
import { Job } from "@/types/job.type"; // Assuming the type file is created

// Props definition for the JobCard component
interface JobCardProps {
  job: Job;
  mode: "grid" | "list";
  onJobClick: (job: Job) => void; // Renamed for clarity (e.g., handleJobClick -> onJobClick)
}



const JobCard = ({ job, mode, onJobClick }: JobCardProps) => {
  // Grid View Layout
  const GridView = () => (
    <div className="p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Image
            src={job.logo || ""}
            alt={`${job.company} logo`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 group-hover:text-[#f26b38] transition-colors text-base line-clamp-1">
                {job.title}
              </h3>
              {job.urgent && (
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                  URGENT
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 line-clamp-1">{job.company}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-[#f26b38] transition-colors flex-shrink-0 p-1">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
            <span className="line-clamp-1">{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
            <span className="line-clamp-1">{job.salary}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
            <span className="line-clamp-1">{job.posted}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2 min-h-[32px] items-start">
            {job.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="bg-orange-50 text-[#f26b38] text-xs px-2 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4">
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              job.type === "Toàn thời gian"
                ? "bg-green-50 text-green-700"
                : job.type === "Bán thời gian"
                ? "bg-blue-50 text-blue-700"
                : job.type === "Hợp đồng"
                ? "bg-purple-50 text-purple-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {job.type}
          </span>
          <button className="bg-[#f26b38] hover:bg-[#e55a2b] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Ứng Tuyển
          </button>
        </div>
      </div>
    </div>
  );

  // List View Layout
  const ListView = () => (
    <div className="p-6 w-full flex items-center min-h-[120px]">
      <div className="flex items-center gap-4 flex-shrink-0 w-80">
        <Image
          src={job.logo || ""}
          alt={`${job.company} logo`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-[#f26b38] transition-colors text-base line-clamp-1">
              {job.title}
            </h3>
            {job.urgent && (
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">
                URGENT
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 line-clamp-1">{job.company}</p>
        </div>
      </div>

      <div className="flex-1 px-6 hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.posted}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {job.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="bg-orange-50 text-[#f26b38] text-xs px-2 py-1 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="text-gray-400 hover:text-[#f26b38] transition-colors p-2">
          <Bookmark className="h-5 w-5" />
        </button>
        <button className="bg-[#f26b38] hover:bg-[#e55a2b] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
          Ứng Tuyển
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`group bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer relative ${
        mode === "grid"
          ? "flex flex-col h-full min-h-[320px]"
          : "flex items-center"
      } ${job.featured ? "ring-2 ring-orange-200" : ""}`}
      onClick={() => onJobClick(job)}
    >
      {job.featured && (
        <div className="absolute -top-2 -right-2 bg-[#f26b38] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
          <Star className="h-3 w-3" />
          NỔI BẬT
        </div>
      )}
      {mode === "grid" ? <GridView /> : <ListView />}
    </div>
  );
};

export default JobCard;
