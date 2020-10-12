import React from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Header({ playing, url, onType, onSubmit }) {
  const handleUrl = (e) => {
    return onType(e.target.value);
  };

  const handleSubmit = () => {
    return onSubmit();
  };

  function renderInput() {
    return (
      <div className="control">
        <input
          placeholder="Enter Youtube URL"
          type="text"
          onChange={handleUrl}
        />
        <Button variant="secondary" onClick={handleSubmit}>
          Search and Play
        </Button>
      </div>
    );
  }

  function renderPlayer() {
    return <ReactPlayer playing={playing} url={url} height={0} />;
  }

  function renderAbout() {
    return (
      <p>
        I often find myself engaging with people's comments on beautiful songs
        while listening. I sit quietly and think. Try to listen to your
        favourite music and read it's comments.
      </p>
    );
  }

  return (
    <div>
      {renderAbout()}
      {renderInput()}
      {renderPlayer()}
    </div>
  );
}
