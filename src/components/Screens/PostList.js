import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";

const PostList = ({ data, passData, refreshPage }) => {
  let navigate = useNavigate();

  const deleteRequest = (ID) => {
    axios
      .delete(`https://bloggy-api.herokuapp.com/posts/${ID}`)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const PostCard = styled.ul`
    display: flex !important;
    flex-wrap: wrap !important;
    margin-left: -30px !important;
    list-style-type: none !important;
  `;

  const OuterBox = styled.section`
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10vh;
    padding-bottom: 10vh;
  `;

  const AddNewButton = styled.button`
    margin-bottom: 40px;
    padding: 15px 30px;
    background-color: #717cff;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
  `;

  const Article = styled.article`
    background-color: white;
    border-radius: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 20px;
  `;

  const buttonStyle = {
    marginRight: "8px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "10px",
    color: "white",
  };

  return (
    <OuterBox>
      <AddNewButton
        onClick={() => {
          navigate("/single-post-add");
        }}
      >
        Add Post
      </AddNewButton>
      <PostCard>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                paddingLeft: "30px",
                width: "50%",
                marginBottom: "20px",
              }}
            >
              <Article>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <div>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#90EE90" }}
                    onClick={() => {
                      navigate("/single-post-page");
                      passData(item.id);
                    }}
                  >
                    View Post
                  </button>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#FFCD01" }}
                    onClick={() => {
                      navigate("/single-post-edit");
                      passData(item.id);
                    }}
                  >
                    Edit Post
                  </button>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#ff4040" }}
                    onClick={() => {
                      deleteRequest(item.id);
                      refreshPage();
                    }}
                  >
                    Delete Post
                  </button>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#717cff" }}
                    onClick={() => {
                      navigate("/single-post-add-comment");
                      passData(item.id);
                    }}
                  >
                    Add Comment
                  </button>
                </div>
              </Article>
            </li>
          );
        })}
      </PostCard>
    </OuterBox>
  );
};

export default PostList;
