import React, { useState } from "react";
import styled  from "styled-components";

const obj = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori",
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that",
    },
  },
};

function GetPath() {
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const path = getPath(obj, query);
    setOutput(path);
  };

  const getPath = (obj, query) => {
    if (query === obj.user.id) {
      return `obj.user.id`;
    } else if (query === obj.user.name.firstName) {
      return `obj.user.name.firstName`;
    } else if (query === obj.user.name.lastName) {
      return `obj.user.name.lastName`;
    } else if (query === obj.user.location.city) {
      return `obj.user.location.city`;
    } else if (query === obj.user.location.state) {
      return `obj.user.location.state`;
    } else if (query === obj.user.location.address) {
      return `obj.user.location.address`;
    } else {
      return "Not found";
    }
  };

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Wrapper>
      <DATAPATH>Querypath: '{output}'</DATAPATH>
    </>
  );
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: #f5f5f5;

`

const Input = styled("input")`
    margin: 10px 0;
    padding: 10px;
    width: 350px
`

const Button = styled("button")`
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #blue;
    width: 100px;
    height: 30px;
    marging: 10px;
    background-color:#2222e3;
    color: white;
`

const DATAPATH = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f5f5f5;
    height: 50vh;
    font-size: 3rem;

`

export default GetPath;
