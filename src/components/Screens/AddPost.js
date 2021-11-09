import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../StyleExport/StyleExport.js";

const URL = `https://bloggy-api.herokuapp.com/posts`;

const AddPost = ({ refreshPage }) => {
  let navigate = useNavigate();

  const [SPageTitle, setSPageTitle] = useState("");
  const [SPageBody, setSPageBody] = useState("");

  const postRequest = () => {
    const addData = { title: SPageTitle, body: SPageBody };
    axios.post(URL, addData);
  };

  return (
    <div style={styles.OuterBox}>
      <div style={styles.CardBox}>
        <label> Title </label>
        <input onChange={(e) => setSPageTitle(e.target.value)} />
        <label style={{ marginTop: "25px" }}> Body </label>
        <textarea
          style={styles.textareaStyle}
          onChange={(e) => setSPageBody(e.target.value)}
        />
        <button
          style={{ ...styles.buttonStyle, backgroundColor: "#717cff" }}
          onClick={() => {
            postRequest();
            navigate("/");
            refreshPage();
          }}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
