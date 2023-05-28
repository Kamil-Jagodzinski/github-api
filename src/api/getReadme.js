import axios from "axios";

const getReadme = async (user, repo) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${user}/${repo}/readme`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );
    const readme = response.data.content;
    const decodedReadme = atob(readme);
    const outReadme = decodeURIComponent(escape(decodedReadme));
    return outReadme;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export { getReadme };
