import {useState} from "react";
import {Button} from "antd";
import PostFormModal from "./PostFormModal";

const EditPostForm = ({post, editPost}) => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  }

  const onSuccess = (values) => {
    const newPost = {...post, ...values}
    editPost(newPost)
    setVisible(false);
  }

  return (
    <div className='create_post_form'>
      <Button style={{marginBottom: 15}} onClick={() => setVisible(true)}>Edit post</Button>
      <PostFormModal type='edit' post={post} visible={visible} onCancel={onCancel} onSuccess={onSuccess}/>
    </div>
  );
};

export default EditPostForm;