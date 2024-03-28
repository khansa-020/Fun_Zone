import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faListUl, faListOl, faImage } from '@fortawesome/free-solid-svg-icons';
import './RichTextEditor.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const handleUploadImage = () => {
    // Handle image uploading logic here
    alert('Image uploading feature coming soon!');
  };

  return (
    <div className="rich-text-editor">
      <div className="toolbar">
        <button onClick={() => toggleInlineStyle('BOLD')}>
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button onClick={() => toggleInlineStyle('ITALIC')}>
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button onClick={() => toggleBlockType('unordered-list-item')}>
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button onClick={() => toggleBlockType('ordered-list-item')}>
          <FontAwesomeIcon icon={faListOl} />
        </button>
        <button onClick={handleUploadImage}>
          <FontAwesomeIcon icon={faImage} />
        </button>
      </div>
      <div className="editor-text">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
