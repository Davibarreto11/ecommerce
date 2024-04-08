export default function Tables() {
  return (
    <li>
      <a
        className="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium  text-white text-bodydark1 duration-300 ease-in-out hover:bg-graydark"
        href="#"
      >
        <svg
          className="fill-current"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_130_9756)">
            <path
              d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
              fill=""
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_130_9756">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0 0.052124)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        Tables
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
            fill=""
          ></path>
        </svg>
      </a>

      <div className="translate transform overflow-hidden hidden">
        <ul className="mb-5.5 mt-4 flex flex-col gap-2 pl-6">
          <li>
            <a
              className="group relative flex items-center gap-2 rounded-md px-4 font-medium  text-white text-bodydark2 duration-300 ease-in-out hover:text-white"
              href="tables.html"
            >
              Tables
            </a>
          </li>
          <li>
            <a
              className="group relative flex items-center gap-2 rounded-md px-4 font-medium  text-white text-bodydark2 duration-300 ease-in-out hover:text-white"
              href="pro-tables.html"
            >
              Pro Tables
              <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium  text-white">
                Pro
              </span>
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}
