"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ReportRouterButton = () => {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push("/report")}
    >
      할일 통계 보러가기
    </button>
  );
};

export default ReportRouterButton;