import { useState, useEffect, useCallback } from "react";
import githubIssues from "../apis/githubIssues";

const useGitIssues = ({ currentPage, filter }) => {
  const [repoIssues, setRepoIssues] = useState([]);
  const fetchIssues = useCallback(async () => {
    const response = await githubIssues.get("/issues", {
      params: {
        per_page: 15,
        page: currentPage,
        state: filter,
      },
    });
    setRepoIssues(response.data);
  }, [currentPage, filter]);
  useEffect(() => {
    fetchIssues(currentPage, filter);
  }, [currentPage, filter, fetchIssues]);

  return [repoIssues, fetchIssues];
};

export default useGitIssues;
