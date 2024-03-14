"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ReportRouterButton = () => {
  const route = useRouter();

  return (
    <button
      className="mt-4 px-6 py-2 bg-black bg-opacity-30 text-white font-semibold rounded-lg shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-150"
      onClick={() => route.push("/report")}
    >
      할일 통계 보러가기
    </button>
  );
};

export default ReportRouterButton;