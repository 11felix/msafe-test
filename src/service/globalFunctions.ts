
export const checkZeroVal = (val: any) => {
  if (!!val && parseFloat(val) > 0) {
    return false;
  } else {
    return true;
  }
};

export const checkNegative = (val: any) => {
  if (!!val && parseFloat(val) < 0) {
    return true;
  } else {
    return false;
  }
};

export const getNumSign = (val: any) => {
  if (!!val && parseFloat(val) > 0) {
    return "+";
  } else {
    return "";
  }
};

export function commaFy(num: any) {
  const str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  return str.join(".");
}

export const getTokenName = (tokenName: any) => {
  let token = tokenName;
  if (!!tokenName) {
    token = tokenName.replace("WBNB", "BNB");
  }
  return token;
};

export const convertNumFormat = (value: any, toFixedVal?: number) => {
  const toFixed = !!toFixedVal ? toFixedVal : 2;
  if (!!value) {
    let finalVal: any = parseFloat(value);
    if (finalVal > 1000000000 || finalVal < -1000000000) {
      finalVal = `${(finalVal / 1000000000).toFixed(toFixed)}B`;
    } else if (finalVal >= 1000000 || finalVal <= -1000000) {
      finalVal = `${(finalVal / 1000000).toFixed(toFixed)}M`;
    } else if (finalVal > 10000 || finalVal < -10000) {
      finalVal = `${(finalVal / 1000).toFixed(toFixed)}K`;
    } else {
      finalVal = finalVal.toFixed(toFixed);
    }
    return finalVal;
  } else {
    const zeroVal = "0";
    return parseFloat(zeroVal).toFixed(toFixed);
  }
};

export const convertToKAndM = (value: any, token?: boolean) => {
  let finalVal: any = parseFloat(value);
  const decimal = token !== undefined && token === true ? 4 : 2;
  if (finalVal > 1000000000000) {
    finalVal = `${(finalVal / 1000000000000).toFixed(3)}T`;
  } else if (finalVal > 1000000000) {
    finalVal = `${(finalVal / 1000000000).toFixed(3)}B`;
  } else if (finalVal > 1000000) {
    finalVal = `${(finalVal / 1000000).toFixed(3)}M`;
  } else if (finalVal > 1000) {
    finalVal = `${(finalVal / 1000).toFixed(3)}K`;
  } else {
    finalVal = finalVal.toFixed(decimal);
  }
  return finalVal;
};

export const getNumFormat = (value: any) => {
  let finalVal: any = "0";

  if (!!value && parseFloat(value) > 0) {
    const newVal = value.toString();
    const valArr: any = newVal.split(".");
    if (valArr.length > 1) {
      const part1 = valArr[0];
      const part2 = valArr[1];
      let finalPart2: any = "";
      if (part2.length <= 6) {
        finalPart2 = part2;
      } else {
        finalPart2 = part2.substring(0, 6);
      }
      finalVal = `${part1}.${finalPart2}`;
    } else {
      finalVal = value;
    }
  }
  return finalVal;
};

export const numberWithCommas = (x: any, dec: any) => {
  if (!x) x = 0;
  if (!dec) dec = 2;
  return parseFloat(x)
    .toFixed(dec)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dateOrdinal = (day: number)  => {
  if (day == 31 || day == 21 || day == 1) return day + "st";
  else if (day == 22 || day == 2) return day + "nd";
  else if (day == 23 || day == 3) return day + "rd";
  else return day + "th";
};

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: "utc", timeZoneName: "short" });
  const revisedDateFormat = dateOrdinal(date.getDate());
  const month = date.toLocaleString('default', { month: 'short' }); 
  const year = date.getFullYear();
  const revisedYear = year.toString().substring(2);
  const customDateTime = time + " " + revisedDateFormat + " " + month + "'" + revisedYear;
  return customDateTime;
}
