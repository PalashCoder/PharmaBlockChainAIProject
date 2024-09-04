import { employeedata } from "@/staticData/employees";
import Image from "next/image";

const EmployeeTable = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
          All Employees
        </h4>
        <button className="text-body-2xl mb-4 rounded-lg bg-blue-500 p-2 font-bold text-white dark:text-dark">
          Add Employee
        </button>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              First Name
            </h5>
          </div>
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Last Name
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Position
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {employeedata.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === employeedata.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {brand.firstname}
              </p>
            </div>

            <div className="flex items-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {brand.lastname}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-light-1">{brand.email}</p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {brand.roles}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <button className="font-bold text-dark dark:text-white">
                <Image
                  src="/vectors/more.svg"
                  height={30}
                  width={30}
                  alt="More"
                  className="hover:rounded-full hover:shadow-md hover:shadow-gray-400"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
