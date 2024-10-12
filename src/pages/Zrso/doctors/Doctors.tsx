import React from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import Table from "./table/Table";

const image =
  "https://plus.unsplash.com/premium_photo-1728510320088-0b89856e726e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8";
const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialties: ["Cardiology", "Internal Medicine"],
    email: "johndoe@example.com",
    experience: "15 years",
    qualifications: ["MBBS", "MD (Cardiology)"],
    image,
  },
  {
    id: 2,
    name: "Dr. Sarah Smith",
    specialties: ["Dermatology"],
    email: "sarahsmith@example.com",
    experience: "8 years",
    qualifications: ["MBBS", "MD (Dermatology)"],
    image,
  },
  {
    id: 3,
    name: "Dr. Mark Taylor",
    specialties: ["Orthopedics", "Sports Medicine"],
    email: "marktaylor@example.com",
    experience: "10 years",
    qualifications: ["MBBS", "MS (Orthopedics)"],
    image,
  },
  {
    id: 4,
    name: "Dr. Emily Clark",
    specialties: ["Pediatrics"],
    email: "emilyclark@example.com",
    experience: "6 years",
    qualifications: ["MBBS", "MD (Pediatrics)"],
    image,
  },
];

const tableHeading = [
  "Name",
  "Specialties",
  "Email",
  "Experience",
  "Qualifications",
];
const Doctors = () => {
  // console.log("tableHeading", tableHeading);

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Doctors" />

        <Table listData={doctorsData} />
      </div>
    </>
  );
};

export default Doctors;
