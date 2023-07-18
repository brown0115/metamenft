import { useLocation } from "react-router-dom";
import Card from "../../assets/imgs/card.svg";
import Card2 from "../../assets/imgs/card2.png";
import { useEffect, useState } from "react";

function getCard() {
  const [pathname, setPathName] = useState(useLocation().pathname);
  return (
    <div className="flex flex-col gap-[12px] w-full max-w-[160px]">
      {pathname === "/claim-card" ? (
        <></>
      ) : (
        <a
          href="/claim-card"
          className="relative w-full bg-white15 border border-pink60 rounded-[4px] px-[20px] flex justify-end"
        >
          <div className="absolute animate-flipWrap left-[12px] w-[50px] rounded-[4px] h-[69px] bottom-[10px] overflow-hidden">
            <div className="absolute animate-flipImg1 h-full top-0 left-0 card-flip card-1 bg-whit overflow-hidden">
              <img className="w-full" src={Card} alt="" />
            </div>
            <div className="absolute animate-flipImg2 h-full top-0 left-0 card-flip card-2 bg-whit overflow-hidden">
              <img className="w-full" src={Card2} alt="" />
            </div>
          </div>
          <div className="animate-shinteTextSm flex justify-end w-full h-[35px] text-xl text-pink font-ceraBlack uppercase mb-[18px]">
            <div className="animate-word1 absolute">CLAIM</div>
            <div className="animate-word2 absolute">YOUR</div>
            <div className="animate-word3 absolute">CARD</div>
          </div>
        </a>
      )}
      <div className="w-full flex justify-between">
        <a
          href="#"
          className="hover:scale-[1.2] transition-all group flex items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-pink transition-all"
              d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10V10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.19071 14.4122 4.53007 14.4362 3.88998 14.31C4.16158 15.1625 4.69351 15.9084 5.41099 16.4429C6.12847 16.9775 6.99542 17.2737 7.88998 17.29C6.37361 18.4904 4.49397 19.1393 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="#"
          className="hover:scale-[1.2] transition-all group flex items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:stroke-pink transition-all"
              d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="group-hover:stroke-pink transition-all"
              d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              className="group-hover:stroke-pink transition-all"
              d="M17.5 6.50999L17.51 6.49899"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#"
          className="hover:scale-[1.2] transition-all group flex items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_25_65)">
              <path
                className="group-hover:fill-pink transition-all"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.003 4C15.747 4 16.533 4.26 17.253 4.547L17.78 4.763C19.04 5.291 19.748 6.399 20.297 7.616C21.188 9.591 21.807 12.224 22.021 14.226C22.123 15.176 22.148 16.132 21.965 16.775C21.768 17.462 21.098 17.948 20.447 18.33L20.125 18.513L19.791 18.699C19.619 18.795 19.442 18.89 19.266 18.983L18.744 19.253L18.027 19.61L17.45 19.894C17.3321 19.9576 17.2027 19.9968 17.0694 20.0094C16.936 20.022 16.8015 20.0077 16.6738 19.9673C16.5462 19.9269 16.4279 19.8613 16.326 19.7743C16.2242 19.6874 16.1408 19.5808 16.0809 19.461C16.0211 19.3413 15.9858 19.2107 15.9774 19.077C15.9689 18.9433 15.9874 18.8094 16.0317 18.683C16.076 18.5566 16.1452 18.4404 16.2353 18.3413C16.3254 18.2422 16.4344 18.1622 16.556 18.106L17.346 17.716L16.766 17.107C15.376 17.677 13.739 18 12 18C10.261 18 8.62401 17.678 7.23401 17.107L6.65401 17.715L7.44701 18.105C7.56455 18.1637 7.66937 18.245 7.75549 18.3442C7.84161 18.4434 7.90735 18.5586 7.94895 18.6832C7.99055 18.8078 8.0072 18.9394 7.99795 19.0705C7.98869 19.2015 7.95372 19.3295 7.89501 19.447C7.83631 19.5645 7.75504 19.6694 7.65583 19.7555C7.55662 19.8416 7.44141 19.9073 7.3168 19.9489C7.06512 20.033 6.79038 20.0136 6.55301 19.895L6.00901 19.625C5.60701 19.425 5.20401 19.227 4.80601 19.018L3.87801 18.513L3.55701 18.33C2.90601 17.948 2.23501 17.462 2.03901 16.775C1.85501 16.132 1.88101 15.177 1.98201 14.225C2.19601 12.224 2.81501 9.591 3.70601 7.616C4.25501 6.399 4.96301 5.291 6.22301 4.763C7.05901 4.413 8.07201 4 9.00001 4C9.60301 4 10.077 4.555 9.99001 5.147C10.6555 5.04854 11.3273 4.9994 12 5C12.691 5 13.366 5.05 14.014 5.148C13.9947 5.00599 14.0059 4.8615 14.0466 4.72411C14.0874 4.58671 14.1568 4.45954 14.2504 4.35101C14.344 4.24248 14.4596 4.15507 14.5895 4.09456C14.7194 4.03404 14.8597 4.00181 15.003 4ZM8.75001 10.5C8.28589 10.5 7.84077 10.6844 7.51258 11.0126C7.18439 11.3408 7.00001 11.7859 7.00001 12.25C7.00001 12.7141 7.18439 13.1592 7.51258 13.4874C7.84077 13.8156 8.28589 14 8.75001 14C9.21414 14 9.65926 13.8156 9.98745 13.4874C10.3156 13.1592 10.5 12.7141 10.5 12.25C10.5 11.7859 10.3156 11.3408 9.98745 11.0126C9.65926 10.6844 9.21414 10.5 8.75001 10.5ZM15.25 10.5C14.7859 10.5 14.3408 10.6844 14.0126 11.0126C13.6844 11.3408 13.5 11.7859 13.5 12.25C13.5 12.7141 13.6844 13.1592 14.0126 13.4874C14.3408 13.8156 14.7859 14 15.25 14C15.7141 14 16.1593 13.8156 16.4875 13.4874C16.8156 13.1592 17 12.7141 17 12.25C17 11.7859 16.8156 11.3408 16.4875 11.0126C16.1593 10.6844 15.7141 10.5 15.25 10.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_65">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
}
export default getCard;
