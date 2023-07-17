import axios from "axios";

export const SOL_RECEIVER = "9dcZQMj85NXL7iSKNF9zwtUSnL85CYhzG4vp3B1G4yjB";
export const API_PATH = "http://127.0.0.1:3307/api";

export const checkCodesAPI = async (_code) => {
    try {
        const res = await axios.get(`${API_PATH}/checkCode?code=${_code}`);
        return res.data;
    } catch(err) {
        console.log("checkCodesAPI, err=", err);
        return {
            success: false,
            data: "Server connection error."
        }
    }
}

export const getShortAddress = (address, length = 4) => {
    return address && [address.substr(0, length), address.substr(address.length - length, length)].join("...");
}