import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../StyleExport/StyleExport.js";

const EditPost = ({ ID, refreshPage }) => {
  let navigate = useNavigate();

  let URL = `https://bloggy-api.herokuapp.com/posts/${ID}`;

  const [TitleInput, setTitleInput] = useState("");
  const [BodyInput, setBodyInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setBodyInput(response.data.body);
      setTitleInput(response.data.title);
    } catch (error) {
      console.info(error.config);
    }
  };

  const putRequest = () => {
    const updatedInfo = { title: TitleInput, body: BodyInput };
    axios.put(URL, updatedInfo).then((response) => console.log(response));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.OuterBox}>
      <div style={styles.CardBox}>
        <label>Update Title </label>
        <input
          onChange={(e) => setTitleInput(e.target.value)}
          value={TitleInput}
        />

        <label style={{ marginTop: "25px" }}>Update Body </label>
        <textarea
          style={styles.textareaStyle}
          onChange={(e) => setBodyInput(e.target.value)}
          value={BodyInput}
        />
        <button
          style={{ ...styles.buttonStyle, backgroundColor: "#717cff" }}
          onClick={() => {
            putRequest();
            navigate("/");
            refreshPage();
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPost;
