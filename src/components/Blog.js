import React, { useEffect, useState } from "react";
import {
  PostList,
  SinglePost,
  EditPost,
  AddPost,
  AddComment,
} from "./Export.js";

import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const URL = `https://bloggy-api.herokuapp.com/posts`;

const Blog = () => {
  const [apiData, setApiData] = useState([]);
  const [singlePageID, setSinglePageID] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setApiData(response.data);
    } catch (error) {
      console.info(error.config);
    }
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let SPData = (data) => {
    setSinglePageID(data);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PostList
                data={apiData}
                passData={SPData}
                refreshPage={refreshPage}
              />
            }
          />
          <Route
            path="/single-post-page"
            element={<SinglePost ID={singlePageID} />}
          />
          <Route
            path="/single-post-edit"
            element={<EditPost refreshPage={refreshPage} ID={singlePageID} />}
          />
          <Route
            path="/single-post-add"
            element={<AddPost refreshPage={refreshPage} />}
          />
          <Route
            path="/single-post-add-comment"
            element={<AddComment refreshPage={refreshPage} ID={singlePageID} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Blog;
