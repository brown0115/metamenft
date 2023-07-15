import Logo from "../../assets/imgs/Logo.svg";
function Header() {
  return (
    <div className="fixed left-[50%] translate-x-[-50%] top-0 w-full max-w-[1400px] mx-auto px-[35px] z-[9]">
      <div className="w-full flex items-center justify-between py-[23px]">
        <a href="/" className="w-full max-w-[160px] flex items-center">
          <img className="w-full" src={Logo} alt="Logo" />
        </a>
        <nav className="relative flex items-center gap-[45px]">
          <ul className="flex items-center gap-[25px]">
            <li className="relative py-[4px] flex items-center">
              <a
                href="#"
                className='text-sm font-ceraMedium text-white uppercase hover:text-pink transition-all before:content-[""] before:absolute before:top-full before:w-[0%] before:hover:w-full before:left-[50%] before:translate-x-[-50%] before:h-[1px] before:bg-pink transition-all before:transition-all'
              >
                claim
              </a>
            </li>
            <li className="relative py-[4px] flex items-center">
              <a
                href="#"
                className='text-sm font-ceraMedium text-white uppercase hover:text-pink transition-all before:content-[""] before:absolute before:top-full before:w-[0%] before:hover:w-full before:left-[50%] before:translate-x-[-50%] before:h-[1px] before:bg-pink transition-all before:transition-all'
              >
                team
              </a>
            </li>
            <li className="relative py-[4px] flex items-center">
              <a
                href="#"
                className='text-sm font-ceraMedium text-white uppercase hover:text-pink transition-all before:content-[""] before:absolute before:top-full before:w-[0%] before:hover:w-full before:left-[50%] before:translate-x-[-50%] before:h-[1px] before:bg-pink transition-all before:transition-all'
              >
                wallet
              </a>
            </li>
          </ul>
          <button className="btn-animation flex items-center gap-[12px] py-[12px] px-[22px] bg-white15  group transition-all">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-pink transition-all"
                d="M12 17C12 17.3978 11.842 17.7794 11.5607 18.0607C11.2794 18.342 10.8978 18.5 10.5 18.5C10.1022 18.5 9.72064 18.342 9.43934 18.0607C9.15804 17.7794 9 17.3978 9 17C9 16.6022 9.15804 16.2206 9.43934 15.9393C9.72064 15.658 10.1022 15.5 10.5 15.5C10.8978 15.5 11.2794 15.658 11.5607 15.9393C11.842 16.2206 12 16.6022 12 17ZM12 17V10.5C12 12.157 13.895 13.5 15 13.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-pink transition-all"
                d="M19.562 7C19.6157 6.69354 19.6017 6.37903 19.5209 6.07857C19.4402 5.7781 19.2946 5.49895 19.0945 5.26071C18.8944 5.02248 18.6445 4.83093 18.3625 4.69951C18.0805 4.5681 17.7731 4.5 17.462 4.5H6.53801C6.22687 4.5 5.91951 4.5681 5.63749 4.69951C5.35548 4.83093 5.10564 5.02248 4.90552 5.26071C4.7054 5.49895 4.55985 5.7781 4.47909 6.07857C4.39832 6.37903 4.3843 6.69354 4.43801 7M17.5 4.5C17.528 4.24 17.543 4.111 17.543 4.004C17.5441 3.50969 17.3621 3.0325 17.0321 2.66446C16.7021 2.29643 16.2475 2.06364 15.756 2.011C15.65 2 15.52 2 15.26 2H8.74001C8.48001 2 8.34901 2 8.24301 2.011C7.75151 2.06364 7.29692 2.29643 6.96693 2.66446C6.63694 3.0325 6.45492 3.50969 6.45601 4.004C6.45601 4.111 6.47001 4.241 6.49901 4.5"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                className="group-hover:stroke-pink transition-all"
                d="M21.194 16.793C20.844 19.273 20.669 20.514 19.772 21.257C18.875 22 17.552 22 14.905 22H9.09502C6.44902 22 5.12502 22 4.22802 21.257C3.33102 20.514 3.15602 19.274 2.80602 16.793L2.38402 13.793C1.93702 10.629 1.71402 9.048 2.66202 8.023C3.61002 7 5.29802 7 8.67202 7H15.328C18.702 7 20.39 7 21.338 8.024C22.086 8.833 22.105 9.99 21.859 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-sm font-ceraMedium text-white group-hover:text-pink transition-all">
              playlist
            </p>
          </button>
        </nav>
      </div>
    </div>
  );
}
export default Header;
