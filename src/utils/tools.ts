export const waitFor = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getDuration = (sinceDate: string) => {
  const since = new Date(sinceDate);
  const now = new Date();
  const diff = new Date(now.getTime() - since.getTime());

  const finalData = (count: number, label: string) => {
    return { count, label: count === 1 ? label : `${label}s` };
  };

  const years = diff.getUTCFullYear() - 1970;
  if (years > 0) return finalData(years, "year");

  const months = diff.getUTCMonth();
  if (months > 0) return finalData(months, "month");

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

type KeyValue = {
  [key: string]: unknown;
};

type RepoType = KeyValue & { name: string };

export const getGithubCommitCount = async () => {
  const fakeTotle = 200;

  if (process.env.NODE_ENV == "development") {
    console.log("Development mode, returning fake total commits");
    return fakeTotle;
  }

  try {
    const res = await fetch(
      "https://api.github.com/users/MAHMOUDGAD123/repos",
      {
        next: {
          revalidate: 60 * 60 * 24 * 7, // a week
        },
      },
    );
    const repos: RepoType[] = await res.json();
    let count = 0;
    for (const repo of repos) {
      const commitsRes = await fetch(
        `https://api.github.com/repos/MAHMOUDGAD123/${repo.name}/commits`,
      );
      const commits: KeyValue[] = await commitsRes.json();
      count += commits.length;
    }
    return count;
  } catch (err) {
    console.log((err as Error).message);
    return fakeTotle;
  }
};
