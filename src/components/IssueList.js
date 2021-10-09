import React, { useState } from "react";
import Pagination from "./Pagination";
import DropDown from "./DropDown";
import useGitIssues from "../hooks/useGitIssues";
import { useQuery } from "../utils";
import { timeSince } from "../utils";

const config = {
  open: "circle outline green",
  closed: "check circle outline red",
};

const IssueList = () => {
  const query = useQuery();
  const [currentPage, setCurrentPage] = useState(
    parseInt(query.get("page")) || 1
  );
  const [filter, setFilter] = useState(query.get("state") || "all");
  const [repoIssues] = useGitIssues({
    currentPage: currentPage,
    filter: filter,
  });

  const renderList = () => {
    if (repoIssues.length > 0) {
      return repoIssues.map((repoIssue) => {
        return (
          <div key={repoIssue.id}>
            <div className="ui celled list">
              <div className="item">
                <i className={`large icon ${config[repoIssue.state]}`} />
                <div className="content">
                  <div className="header">
                    <h4>
                      {repoIssue.title}
                      {repoIssue.labels.map((label) => {
                        return (
                          <div
                            className={`ui horizontal label`}
                            key={label.name}
                            style={{
                              backgroundColor: `#${label.color}`,
                              color: "white",
                            }}
                          >
                            {label.name}
                          </div>
                        );
                      })}
                    </h4>
                  </div>
                  <div className="description">
                    #{repoIssue.id} opened {timeSince(repoIssue.updated_at)} by{" "}
                    {repoIssue.user.login}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="ui segment">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }
  };

  return (
    <div>
      <DropDown
        filter={filter}
        setFilter={setFilter}
        currentPage={currentPage}
      />
      {renderList()}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filter={filter}
      />
    </div>
  );
};

export default IssueList;
