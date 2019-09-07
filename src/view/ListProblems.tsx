import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "../components/Auth0Provider";
import ProblemTable from "./problem/ProblemTable";

const ListProblems: React.FC<{ draft: boolean }> = props => {
  const { isAuthenticated, getTokenSilently } = useAuth0() as any;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    (async () => {
      if (!props.draft) {
        const result = await axios.get(
          `${process.env.REACT_APP_FILE_STORAGE}/index.json`
        );

        setProblems(result.data);
      } else {
        if (!isAuthenticated) {
          return;
        }

        const result = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/problems/drafts`,
          {
            headers: {
              Authorization: `Bearer ${await getTokenSilently()}`
            }
          }
        );

        if (result.data) {
          setProblems(result.data);
        }
      }
    })();
  }, [isAuthenticated, props.draft]);

  return <ProblemTable problems={problems}></ProblemTable>;
};

export default ListProblems;
