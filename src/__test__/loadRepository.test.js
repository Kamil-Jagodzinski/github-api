import axios from "axios";
import { loadRepositories } from "../api/loadRepositories";

jest.mock("axios");

describe("loadRepositories", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Expect repositories metrics", async () => {
    const user = "username";
    const alertIgnor = jest.spyOn(window, "alert").mockImplementation();
    const repositories = [
      {
        name: "repo1",
        html_url: "https://github.com/user/repo1",
        language: "JavaScript",
      },
      {
        name: "repo2",
        html_url: "https://github.com/user/repo2",
        language: "Python",
      },
    ];

    const repoResponse1 = {
      data: {
        stargazers_count: 0,
        watchers_count: 0,
        forks_count: 0,
        open_issues_count: 0,
      },
    };

    const repoResponse2 = {
      data: {
        stargazers_count: 1,
        watchers_count: 1,
        forks_count: 1,
        open_issues_count: 1,
      },
    };

    axios.get.mockResolvedValueOnce({ data: repositories });
    axios.get.mockResolvedValueOnce(repoResponse1);
    axios.get.mockResolvedValueOnce(repoResponse2);

    const expectedRepositoriesWithMetrics = [
      {
        name: "repo1",
        url: "https://github.com/user/repo1",
        lang: "JavaScript",
        stargazers: 0,
        watchers: 0,
        forks: 0,
        openIssues: 0,
      },
      {
        name: "repo2",
        url: "https://github.com/user/repo2",
        lang: "Python",
        stargazers: 1,
        watchers: 1,
        forks: 1,
        openIssues: 1,
      },
    ];

    const result = await loadRepositories(user);

    expect(result).toEqual(expectedRepositoriesWithMetrics);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/${user}/repos`
    );
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/repos/${user}/repo1`
    );
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/repos/${user}/repo2`
    );
    alertIgnor.mockRestore();
  });

  it("Expect null due to error", async () => {
    const user = "username";
    const alertIgnor = jest.spyOn(window, "alert").mockImplementation();
    axios.get.mockRejectedValueOnce(new Error("API error"));
    const result = await loadRepositories(user);
    expect(result).toBeNull();
    alertIgnor.mockRestore();
  });
});
