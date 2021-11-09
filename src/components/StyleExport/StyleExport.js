const OuterBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};

const CardBox = {
  width: "50%",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "5px 10px",
  border: "none",
  borderRadius: "10px",
  color: "white",
  width: "30%",
  alignSelf: "end",
};

const textareaStyle = {
  minHeight: "140px",
  resize: "vertical",
};

module.exports = {
  OuterBox: OuterBox,
  textareaStyle: textareaStyle,
  buttonStyle: buttonStyle,
  CardBox: CardBox,
};
