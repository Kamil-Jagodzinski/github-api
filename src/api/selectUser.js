import axios from "axios";

const selectUser = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    const userData = response.data;

    const userMetrics = {
      avatar_url: userData.avatar_url,
      login: userData.login,
      name: userData.name,
      html_url: userData.html_url,
      bio: userData.bio,
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,
      updated_at: userData.updated_at
    };

    return userMetrics;
  } catch (error) {
    console.log(error);
    alert(error);
  }
  return {};
};

export { selectUser };
