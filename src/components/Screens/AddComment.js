import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../StyleExport/StyleExport.js";

const URL = `https://bloggy-api.herokuapp.com/comments`;

const AddComment = ({ refreshPage, ID }) => {
  let navigate = useNavigate();

  const [SPageComment, setSPageComment] = useState("");

  const postRequest = () => {
    const addData = { postId: ID, body: SPageComment };
    console.log(addData);
    axios.post(URL, addData).then((response) => console.log(response));
  };

  return (
    <div style={styles.OuterBox}>
      <div style={styles.CardBox}>
        <label> Comment </label>
        <textarea
          style={styles.textareaStyle}
          onChange={(e) => setSPageComment(e.target.value)}
        />
        <button
          style={{ ...styles.buttonStyle, backgroundColor: "#717cff" }}
          onClick={() => {
            postRequest();
            navigate("/");
            refreshPage();
          }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
