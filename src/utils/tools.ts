export const waitFor = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getDuration = (sinceDate: string | Date) => {
  const since = new Date(sinceDate);
  const now = new Date();
  const diff = new Date(now.getTime() - since.getTime());

  if (diff.getTime() < 0) {
    return { count: 0, label: "back to the future😅" };
  }

  const finalData = (count: number, label: string) => {
    return { count, label: count >>> 0 > 1 ? `${label}s` : label };
  };

  const years = diff.getUTCFullYear() - 1970;
  const months = diff.getUTCMonth();

  if (years > 0) {
    // return finalData(+(years + months / 12).toFixed(2), "year");
    return finalData(years * 12 + months, "month");
  } else if (months > 0) {
    return finalData(months, "month");
  }

  let days = diff.getUTCDate();
  if (days > 1) {
    days -= 1; // remove the plus day
    // weeks
    if (days > 7) {
      let weeks = 0;
      while (days > 0) {
        days -= 7;
        weeks += 1;
      }
      return finalData(weeks, "week");
    }
    // days
    return finalData(days, "day");
  }

  const hours = diff.getUTCHours();
  if (hours > 0) return finalData(hours, "hour");

  const minutes = diff.getUTCMinutes();
  if (minutes > 0) return finalData(minutes, "minute");

  const seconds = diff.getUTCSeconds();
  if (seconds > 0) return finalData(seconds, "second");

  return { count: 0, label: "just now" };
};
