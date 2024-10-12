import { useRef, useState } from "react";
import ClickOutside from "../../../../components/ClickOutside";
import Pagination from "../../../../components/Pagination/Pagination";

const Table = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const actionRef = useRef();
  const handleToggle = (index: number) => {
    console.log("index", typeof index);
    setIsOpen(isOpen === index ? null : index);
  };

  const onPageChange = () => {
    console.log("page change");
  };

  console.log("isOpen", isOpen);

  const doctors = [
    {
      name: "Musharof Chowdhury",
      position: "Multidisciplinary Web Entrepreneur",
      email: "musharof@example.com",
      role: "Owner",
    },
    {
      name: "Naimur Rahman",
      position: "Website Front-end Developer",
      email: "naimurrahman@example.com",
      role: "Member",
    },
    {
      name: "Shafiq Hammad",
      position: "Regional Paradigm Technician",
      email: "shafiq.hd@example.com",
      role: "Moderator",
    },
    {
      name: "Alex Semuyel",
      position: "Applications Engineer",
      email: "alex.semuel@example.com",
      role: "Admin",
    },
  ];

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="">
          {/* Table Header */}
          <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
            <div className="col-span-3">
              <h5 className="font-medium text-white">Name</h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-white">Position</h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-white">Email</h5>
            </div>
            <div className="col-span-2">
              <h5 className="font-medium text-white">Role</h5>
            </div>
            <div className="col-span-1">
              <h5 className="text-right font-medium text-white">Edit</h5>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white dark:bg-boxdark ">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
              >
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {doctor.name}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {doctor.position}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {doctor.email}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[#637381] dark:text-bodydark">
                    {doctor.role}
                  </p>
                </div>
                {/* <ClickOutside
                  onClick={() => setIsOpen(false)}
                  className="relative"
                > */}
                <div className="col-span-1 relative">
                  <button
                    onClick={() => handleToggle(index)}
                    className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none"
                  >
                    Action
                    <svg
                      className="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z"
                        fill=""
                      />
                    </svg>
                  </button>

                  {isOpen === index && (
                    <div className="absolute right-0 top-full z-1 mt-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark">
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                        Edit
                      </button>
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                        Delete
                      </button>
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                        Details
                      </button>
                    </div>
                  )}
                </div>
                {/* </ClickOutside> */}
              </div>
            ))}
          </div>

          <Pagination
            currentPage={2}
            totalPages={5}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
