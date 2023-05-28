import axios from "axios";
import { searchUsers } from "../api/searchUsers";

jest.mock("axios");

describe("GitHub API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("searchUsers", () => {
    it("Expect array of users", async () => {
      const query = "example";
      const alertIgnor = jest.spyOn(window, "alert").mockImplementation();

      const mockResponse = {
        data: {
          items: [
            {
              login: "user1",
              html_url: "https://github.com/user1",
              avatar_url: "https://github.com/user1/avatar",
            },
            {
              login: "user2",
              html_url: "https://github.com/user2",
              avatar_url: "https://github.com/user2/avatar",
            },
          ],
        },
      };

      axios.get.mockResolvedValueOnce(mockResponse);

      const result = await searchUsers(query);

      expect(result).toEqual([
        {
          login: "user1",
          url: "https://github.com/user1",
          avatar: "https://github.com/user1/avatar",
        },
        {
          login: "user2",
          url: "https://github.com/user2",
          avatar: "https://github.com/user2/avatar",
        },
      ]);

      expect(axios.get).toHaveBeenCalledWith(
        `https://api.github.com/search/users?q=${query}&per_page=10`
      );
      alertIgnor.mockRestore();
    });

    it("Expect null", async () => {
      const query = "example";
      const alertIgnor = jest.spyOn(window, "alert").mockImplementation();
      axios.get.mockRejectedValueOnce(new Error("API error"));
      const result = await searchUsers(query);
      expect(result).toBeNull();
      alertIgnor.mockRestore();
    });
  });
});
