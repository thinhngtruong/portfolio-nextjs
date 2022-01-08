import * as React from "react";
import { StudentDetail } from "@/components/swr";

function SWRPage() {
  return <div>
    <h1>SWR playground</h1>
    <ul>
      <li><StudentDetail studentId={'sktwi1cgkkuif36f3'}></StudentDetail></li>
      <li><StudentDetail studentId={'sktwi1cgkkuif36f3'}></StudentDetail></li>
      <li><StudentDetail studentId={'sktwi1cgkkuif36f3'}></StudentDetail></li>
    </ul>
  </div>;
}

export default SWRPage;
