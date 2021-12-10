import {useState} from "react";
import PostItem from "./components/PostItem";
import 'antd/dist/antd.css'
import './styles/App.css';
import {Select} from "antd";
import CreatePostForm from "./components/CreatePostForm";


function App() {
  const {Option} = Select;
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description', likes: 0},
    {id: 2, title: 'Javascript 2', body: 'Description', likes: 0},
    {id: 3, title: 'Javascript 3', body: 'Description', likes: 0},
    {id: 4, title: 'Javascript 4', body: 'Description', likes: 0},
    {id: 5, title: 'Javascript 5', body: 'Description', likes: 0}
  ]);

  const changePost = (changedPost) => {
    const index = posts.findIndex(post => post.id === changedPost.id);

    const newPosts = [...posts];
    newPosts[index] = changedPost;
    setPosts(newPosts);
  }

  const createPost = (values) => {
    const newPost = {
      id: Date.now(),
      title: values.title,
      body: values.body,
      likes: 0
    }
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    const newPosts = posts.filter(p => p.id !== post.id);
    setPosts(newPosts);
  }

  return (
    <div className="App">
      <div className='posts_actions'>
        <CreatePostForm createPost={createPost}/>
        <div className='posts_sort'>
          <Select
            placeholder={'Sort by'}
          >
            <Option value='title'>Title</Option>
            <Option value='description'>Description</Option>
          </Select>
        </div>
      </div>
      {
        posts.length
        ?
        <div className="PostList">
          {posts.map(post => {
            return <PostItem
              key={post.id}
              post={post}
              changePost={changePost}
              removePost={removePost}
            />;
          })}
        </div>
        :
        <p style={{fontSize: 24, textAlign: 'center'}}>Posts not found</p>
      }
    </div>
  );
}

export default App;
