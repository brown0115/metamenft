export const getShortAddress = (address, length = 4) => {
    return address && [address.substr(0, length), address.substr(address.length - length, length)].join("...");
}