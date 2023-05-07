import React, {useState} from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './Posts.css';
import { createPostAction } from '../../slice/postSlice';
import {  useDispatch } from 'react-redux';
import { ReactComponent as PlusIcon} from '../../icons/plus.svg';
import styled from 'styled-components';

const Icon = styled.i`
  border-radius: 50%;
  background-color: #276afb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .6rem;
  margin: 25px 0;
  transition: filter .3s;
  fill: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  &:hover {
    filter: brightness(1.2)
  }
`

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [addPost, setAddPost] = useState(false);
  const dispatch = useDispatch();

  const onChange = e => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setBody(e.target.value)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    const post = {
      title,
      body
    }
    dispatch(createPostAction(post));
    setTitle('');
    setBody('');
    setAddPost(false);
  }

  const handleCancel = () => {
    setTitle('');
    setBody('');
    setAddPost(false);
  }

  return (
    <>
      {!addPost ? <Icon onClick={() => setAddPost(true)}><PlusIcon className='icon'/></Icon> :
        <div className='add-post'>
          <h2>Add Post</h2>
          <form onSubmit={onSubmit}>
            <div className='form-block'>
              <label>Title: </label>
              <input type="text" onChange={onChange} placeholder='Title...' name='title' value={title}/>
            </div>
            <div className='form-block'>
              <label>Body: </label>
              <textarea name="body" onChange={onChange} placeholder='Body...' value={body}/>
            </div>
            <button className='btn btn-cancel' onClick={handleCancel}>Cancel</button>
            <input className='btn' type="submit" value="Add Post"/>
          </form>
        </div>
      }
    </>
  )
}

// PostForm.propTypes = {
//   createPost: PropTypes.func.isRequired
// }

export default PostForm;

// export default connect(null, { createPost })(PostForm);