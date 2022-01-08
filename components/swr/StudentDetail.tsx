import React from "react";
import useSWR from "swr";

interface StudentDetailProps {
  studentId: any;
}

export const StudentDetail = ({ studentId }: StudentDetailProps) => {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`
  );

  const handleMutate = () => {
    mutate({ name: "Thinh Nguyen" });
  };

  return (
    <div>
      {data?.name || "--"} <button onClick={handleMutate}>mutate</button>
    </div>
  );
};
