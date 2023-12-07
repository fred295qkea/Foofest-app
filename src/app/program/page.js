//page.js

import Program from "@/components/Program";

async function getBands() {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  return data;
}

async function getSchedule() {
  const response = await fetch("http://localhost:8080/schedule");
  const data = await response.json();
  return data;
}

export default async function Bandspage() {
  //declaring a variable for the data i fetched
  const bands = await getBands();
  const schedule = await getSchedule();

  // console.log(bands);
  // Here i return a component with the data i fecthed as props
  return (
    <div>
      <Program bands={bands} schedule={schedule} />;
    </div>
  );
}