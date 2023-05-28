import axios from "axios";

const searchUsers = async (query) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=10`
    );
    const users = response.data.items.map((user) => ({
      login: user.login,
      url: user.html_url,
      avatar: user.avatar_url,
    }));
    return users;
  } catch (error) {
    alert(error);
  }
  return null;
};

export { searchUsers };
