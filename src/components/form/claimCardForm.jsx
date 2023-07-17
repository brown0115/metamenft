import { useRef, useState } from "react";
import { useCustomWallet } from "../../contexts/WalletContext";
import { toast } from "react-toastify";
import { SOL_RECEIVER, checkCodesAPI } from "../../utils";
import { sendSol } from "../../utils/web3";

function ClaimCardForm() {
  const { connected, endpoint, wallet, walletAddress } = useCustomWallet();
  const codeRef = useRef();
  const discordRef = useRef();
  
  const handleSubmit = async () => {
    if(!connected) return;

    if(codeRef.current.value == "") {
      toast.error("Please input the code correctly.");
      codeRef.current.focus();
      return;
    }
    else if(discordRef.current.value == "") {
      toast.error("Please input the discord name correctly.");
      discordRef.current.focus();
      return;
    }
    const _code = codeRef.current.value;
    const _discordName = discordRef.current.value;
    const checkRes = await checkCodesAPI(_code, _discordName);
    if(checkRes.success) {
      toast.success(checkRes.data);
      const sendSolRes = await sendSol(endpoint, wallet, walletAddress, SOL_RECEIVER);
      if(sendSolRes.success) {
        toast.success("Send sol successfully!");
      } else {
        toast.error(sendSolRes.message);
      }
    } else {
      toast.error(checkRes.data);
    }
  }

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black75 backdrop-blur-[60px]">
      <div className="w-full h-full flex items-center">
        <div className="w-full h-full max-w-[600px] max-h-[calc(100%-130px)] mx-auto px-[30px] pt-[45px] overflow-auto">
          <div className="w-full h-full flex flex-col items-center">
            <h3 className="text-xl font-ceraBlack text-white mb-[35px] uppercase">
              Claim your gift
            </h3>
            <div className="w-full h-full">
            {/* <form className="w-full h-full"> */}
              <div className="flex flex-col gap-[40px]">
                <div
                  className="w-full flex flex-col gap-[10px]"
                >
                  <label
                    htmlFor="code"
                    className="text-lg text-white font-ceraMedium"
                  >
                    Enter Your Code
                  </label>
                  <input
                    type="text"
                    disabled={connected ? false : true}
                    placeholder="e.g - Mcp6FqTdTqb48uV-metame-PmvV8WqGmfFV"
                    className="w-full px-[16px] py-[20px] text-md text-white outline-none bg-white15 border-b border-b-white transition-all font-ceraLight placeholder-shown:border-b-white35"
                    ref={codeRef}
                  />
                </div>
                <div                  
                  className="w-full flex flex-col gap-[10px]"
                >
                  <label
                    htmlFor="discord"
                    className="text-lg text-white font-ceraMedium"
                  >
                    Enter Your Discord
                  </label>
                  <input
                    type="text"
                    disabled={connected ? false : true}
                    placeholder="e.g. adam.sol#5494"
                    className="w-full px-[16px] py-[20px] text-md text-white outline-none bg-white15 border-b border-b-white transition-all font-ceraLight placeholder-shown:border-b-white35"
                    ref={discordRef}
                  />
                </div>
              </div>
              {!connected ? (
                <div className="flex items-center gap-[12px] mt-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0502 18.7069L13.0613 3.87094C12.4951 2.81906 10.9866 2.81906 10.4199 3.87094L2.43146 18.7069C2.30851 18.9352 2.24687 19.1916 2.25256 19.4508C2.25824 19.7101 2.33105 19.9635 2.46389 20.1863C2.59673 20.409 2.78504 20.5935 3.01047 20.7217C3.23589 20.85 3.49071 20.9176 3.75005 20.918H19.7293C19.9888 20.918 20.2439 20.8507 20.4697 20.7226C20.6954 20.5945 20.8841 20.4101 21.0172 20.1873C21.1503 19.9644 21.2233 19.7109 21.2291 19.4514C21.2349 19.1919 21.1733 18.9354 21.0502 18.7069ZM11.7408 18.6211C11.5554 18.6211 11.3742 18.5661 11.22 18.4631C11.0658 18.3601 10.9457 18.2137 10.8747 18.0424C10.8037 17.8711 10.7852 17.6826 10.8213 17.5007C10.8575 17.3188 10.9468 17.1518 11.0779 17.0207C11.209 16.8896 11.3761 16.8003 11.5579 16.7641C11.7398 16.7279 11.9283 16.7465 12.0996 16.8175C12.2709 16.8884 12.4173 17.0086 12.5203 17.1627C12.6234 17.3169 12.6783 17.4982 12.6783 17.6836C12.6783 17.9322 12.5796 18.1707 12.4037 18.3465C12.2279 18.5223 11.9895 18.6211 11.7408 18.6211ZM12.759 9.19219L12.4899 14.9109C12.4899 15.1099 12.4109 15.3006 12.2702 15.4413C12.1296 15.5819 11.9388 15.6609 11.7399 15.6609C11.541 15.6609 11.3502 15.5819 11.2096 15.4413C11.0689 15.3006 10.9899 15.1099 10.9899 14.9109L10.7208 9.19453C10.7148 9.05793 10.7363 8.92151 10.7841 8.79341C10.8319 8.6653 10.905 8.54813 10.9991 8.44888C11.0931 8.34963 11.2062 8.27033 11.3315 8.2157C11.4569 8.16108 11.5919 8.13225 11.7286 8.13094H11.7385C11.8761 8.13087 12.0124 8.15869 12.139 8.21272C12.2656 8.26675 12.38 8.34587 12.4752 8.44531C12.5704 8.54475 12.6444 8.66245 12.6929 8.7913C12.7413 8.92015 12.7632 9.05748 12.7571 9.195L12.759 9.19219Z"
                      fill="#FF6340"
                    />
                  </svg>
                  <p className="text-red font-ceraMedium text-md">
                    Please connect your wallet first
                  </p>
                </div>
              ) : (
                <></>
              )}

              <button
                className={`w-full py-[20px] ${connected ? "bg-white hover:text-pink" : "bg-[#888]"} rounded-full group mt-[35px] flex items-center justify-center text-md font-ceraMedium text-black transition-all`}
                disabled={!connected}
                onClick={handleSubmit}
              >
                Submit Code (0.01 sol)
              </button>
            {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClaimCardForm;
