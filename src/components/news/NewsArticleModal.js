import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const NewsArticleModal = ({
  modalIsOpen,
  updateNewsArticles,
  isEditing,
  titleError,
  urlError,
  synopsisError,
  handleFieldChange,
  values,
  cancelNewsArticle,
  isLoading
}) => {
  return (
    <Modal open={modalIsOpen}>
      <Modal.Header>{isEditing ? "Edit News Article" : "Create News Article"}</Modal.Header>
      <Modal.Content>
        <Form loading={isLoading}>
          <Form.Input
            placeholder="Title"
            id="title"
            type="text"
            label="News Article Title"
            onChange={handleFieldChange}
            value={values.title}
            error={titleError}
          />
          <Form.Input
            placeholder="URL"
            id="url"
            type="text"
            label="News Article URL"
            onChange={handleFieldChange}
            value={values.url}
            error={urlError}
          />
          <Form.Input
            placeholder="Synopsis"
            id="synopsis"
            label="News Article Synopsis"
            onChange={handleFieldChange}
            value={values.synopsis}
            error={synopsisError}
          />
          <Button onClick={updateNewsArticles}>{isEditing ? "Save" : "Add"}</Button>
          <Button onClick={cancelNewsArticle}>Cancel</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default NewsArticleModal;