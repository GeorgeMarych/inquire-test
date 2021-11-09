import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import styles from "../StyleExport/StyleExport.js";

const URLCOMMENT = `https://bloggy-api.herokuapp.com/comments`;

const SinglePost = ({ ID }) => {
  let URL = `https://bloggy-api.herokuapp.com/posts/${ID}?_embed=comments`;

  const [SPageTitle, setSPageTitle] = useState("");
  const [SPageBody, setSPageBody] = useState("");
  const [SPageComments, setSPageComments] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setSPageTitle(response.data.title);
      setSPageBody(response.data.body);
    } catch (error) {
      console.info(error.config);
    }
  };

  const fetchComments = async () => {
    let array = [];
    try {
      const response = await axios.get(URLCOMMENT);
      console.log(response.data);

      response.data.map((item) => {
        if (item.postId === ID) {
          array.push(item.body);
          setSPageComments([...array]);
        }
      });
    } catch (error) {
      console.info(error.config);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const CardBox = styled.div`
    width: 50%;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  `;

  console.log(SPageComments);
  return (
    <div style={styles.OuterBox}>
      <CardBox>
        <h2>{SPageTitle}</h2>
        <p>{SPageBody}</p>
        <br></br>
        <div>
          <h5>Comments:</h5>
          {SPageComments &&
            SPageComments.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </CardBox>
    </div>
  );
};

export default SinglePost;
