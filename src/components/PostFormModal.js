import {Modal, Form, Input} from "antd";

const PostFormModal = ({type, post, visible, onCancel, onSuccess}) => {
  const [form] = Form.useForm();

  let label, okText;

  switch (type) {
    case 'edit':
      label = 'Edit post';
      okText = 'Edit';
      break;
    case 'create':
    default:
      label = 'Create new post'
      okText = 'Create'
  }

  const onOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSuccess(values);
        form.resetFields();
      })
  }
  return (
    <Modal
      visible={visible}
      title={label}
      okText={okText}
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        form={form}
        name='postForm'
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 20
        }}
        initialValues={{
          title: post ? post.title : '',
          body: post ? post.body : '',
        }}
        autoComplete='off'
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[
            {
              required: true,
              message: 'Title is required'
            }
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Body'
          name='body'
          rules={[
            {
              required: true,
              message: 'Body is required'
            }
          ]}
        >
          <Input.TextArea rows={4}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PostFormModal;