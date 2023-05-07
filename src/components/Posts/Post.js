import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { edit } from "../../slice/postSlice";
import "./Posts.css";

const Edit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.8em;
  cursor: pointer;
  background-color: #276afb;
  color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
`;
const TitleEdit = styled.input`
  padding: 0.3em;
  width: 75%;
  font-family: "Alata", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  overflow-wrap: wrap;
`;
const BodyEdit = styled.input`
  padding: 0.3em;
  width: 95%;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
`;

export default function Post({ post }) {
  const dispatch = useDispatch();
  const { id, title, body } = post;
  const [titleEdit, setTitleEdit] = useState(title);
  const [bodyEdit, setBodyEdit] = useState(body);
  const [isEdit, setIsEdit] = useState(false);

  const editPost = () => {
    dispatch(edit({ title: titleEdit, body: bodyEdit, id }));
    setIsEdit(false);
  };

  return (
    <div className="post" key={id}>
      {isEdit ? (
        <Edit onClick={editPost}>Done</Edit>
      ) : (
        <Edit onClick={() => setIsEdit(true)}>Edit</Edit>
      )}
      {!isEdit ? (
        <>
          <h3>{titleEdit}</h3>
          <p>{bodyEdit}</p>
        </>
      ) : (
        <>
          <TitleEdit
            value={titleEdit}
            onChange={(e) => setTitleEdit(e.target.value)}
          />
          <BodyEdit
            value={bodyEdit}
            onChange={(e) => setBodyEdit(e.target.value)}
          />
        </>
      )}
    </div>
  );
}
