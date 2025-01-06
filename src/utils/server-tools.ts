"use server";

type KeyValue = {
  [key: string]: unknown;
};

type RepoType = KeyValue & { name: string };

// gethub commits data fetching
export const getGithubCommitCount = async () => {
  const fakeTotle = 261;

  if (process.env.NODE_ENV == "development") {
    return fakeTotle;
  }

  try {
    const res = await fetch(
      "https://api.github.com/users/MAHMOUDGAD123/repos",
      {
        next: {
          revalidate: 60 * 60 * 24 * 3, // every 3 days
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
      count += commits.length || 0;
    }
    return count;
  } catch (err) {
    console.log((err as Error).message);
    return fakeTotle;
  }
};
