import {useState} from "react";
import {Button} from "antd";
import PostFormModal from "./PostFormModal";

const CreatePostForm = ({createPost}) => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  }

  const onSuccess = (values) => {
    createPost(values)
    setVisible(false);
  }

  return (
    <div className='create_post_form'>
      <Button style={{marginBottom: 15}} onClick={() => setVisible(true)}>Create post</Button>
      <PostFormModal type='create' visible={visible} onCancel={onCancel} onSuccess={onSuccess}/>
    </div>
  );
};

export default CreatePostForm;