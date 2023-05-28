import axios from "axios";

const loadRepositories = async (user) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    const repositories = response.data;

    const repositoriesWithMetrics = await Promise.all(
      repositories.map(async (repo) => {
        const repoResponse = await axios.get(
          `https://api.github.com/repos/${user}/${repo.name}`
        );
        const repoInfo = {
          name: repo.name,
          url: repo.html_url,
          lang: repo.language,
          stargazers: repoResponse.data.stargazers_count,
          watchers: repoResponse.data.watchers_count,
          forks: repoResponse.data.forks_count,
          openIssues: repoResponse.data.open_issues_count,
        };
        return repoInfo;
      })
    );

    return repositoriesWithMetrics;
  } catch (error) {
    alert(error);
  }
  return null;
};

export { loadRepositories };
