import { useLocation } from "react-router";

export const timeSince = (dateObj) => {
  const date = new Date(dateObj);
  function fromNow(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
      const month = date.toLocaleString("default", { month: "long" });

      return "on " + month + " " + date.getDate() + " " + date.getFullYear();
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      const month = date.toLocaleString("default", { month: "long" });
      return "on " + month + " " + date.getDate();
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  const result = fromNow(date);

  return <>{result}</>;
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
