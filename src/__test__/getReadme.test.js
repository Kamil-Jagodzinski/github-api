import axios from "axios";
import { getReadme } from "../api/getReadme";

jest.mock("axios");

describe("GitHub API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getReadme", () => {
    it("Expect formated readme", async () => {
      const user = "username";
      const repo = "repo";
      const readmeContent = "VEVTVF9SRUFETUU=";
      const decodedReadmeContent = "TEST_README";
      const encodedReadmeContent = encodeURIComponent(decodedReadmeContent);
      const consoleIgnor = jest.spyOn(console, "log").mockImplementation();

      axios.get.mockResolvedValueOnce({
        data: {
          content: readmeContent,
        },
      });

      const result = await getReadme(user, repo);

      expect(result).toEqual(encodedReadmeContent);
      expect(axios.get).toHaveBeenCalledWith(
        `https://api.github.com/repos/${user}/${repo}/readme`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      consoleIgnor.mockRestore();
    });

    it("Expect null due to error", async () => {
      const user = "username";
      const repo = "repo";
      const consoleIgnor = jest.spyOn(console, "log").mockImplementation();
      axios.get.mockRejectedValueOnce(new Error("API error"));
      const result = await getReadme(user, repo);
      expect(result).toBeNull();
      consoleIgnor.mockRestore();
    });
  });
});
