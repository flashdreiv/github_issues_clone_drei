import { useState, useEffect } from "react";
import githubIssues from "../apis/githubIssues";

const useGitIssues = ({ currentPage, filter }) => {
  const [repoIssues, setRepoIssues] = useState([]);
  async function fetchIssues() {
    const response = await githubIssues.get("/issues", {
      params: {
        per_page: 15,
        page: currentPage,
        state: filter,
      },
    });
    setRepoIssues(response.data);
  }
  useEffect(() => {
    fetchIssues(currentPage, filter);
  }, [currentPage, filter]);

  return [repoIssues, fetchIssues];
};

export default useGitIssues;
