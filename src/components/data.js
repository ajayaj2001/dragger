const parentStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  flex: 1,
  height: "100vh",
};

const secondParentStyle = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "row",
  height: "50%",
};

const first = {
  flexGrow: 1,
  border: "1px solid silver",
  height: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const second = {
  flexGrow: 3,
  width: "50%",
  border: "1px solid silver",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const third = {
  flexGrow: 1,
  border: "1px solid silver",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styleList = {
  parentStyle,
  second,
  secondParentStyle,
  first,
  third,
};
