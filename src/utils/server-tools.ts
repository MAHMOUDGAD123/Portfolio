"use server";

type KeyValue = {
  [key: string]: unknown;
};

type RepoType = KeyValue & { name: string; private: boolean };

// gethub commits data fetching
export const getGithubCommitCount = async () => {
  if (process.env.NODE_ENV == "development") {
    return (Math.random() * 400 + 100) >>> 0;
  }

  const githubAccessToken = process.env.GITHUB_TOKEN;

  if (!githubAccessToken) {
    throw new Error("GITHUB_TOKEN not found");
  }

  // try {
  const res = await fetch("https://api.github.com/users/MAHMOUDGAD123/repos", {
    headers: {
      Authorization: githubAccessToken,
    },
  });
  const repos: RepoType[] = await res.json();
  let count = 0;
  for (const repo of repos) {
    const commitsRes = await fetch(
      `https://api.github.com/repos/MAHMOUDGAD123/${repo.name}/commits`,
      {
        headers: {
          Authorization: githubAccessToken,
        },
      },
    );
    const commits: KeyValue[] = await commitsRes.json();
    count += commits.length || 0;
  }
  return count;
  // } catch (err) {
  //   console.error((err as Error).message);
  //   return 303;
  // }
};
