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
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Enter Youtube URL"
          type="text"
          onChange={handleUrl}
        />
        <Button variant="secondary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }

  function renderPlayer() {
    return <ReactPlayer playing={playing} url={url} height={0} />;
  }

  function renderAbout() {
    return (
      <>
        <p>
          I often find myself engaging with people's comments on beautiful songs
          while listening. Try to listen to your favourite music and read it's
          comments.
        </p>
      </>
    );
  }

  function renderDonate() {
    return (
      <div style={{ marginBottom: 30 }}>
        <a
          href="https://www.buymeacoffee.com/munkhorgil"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
            alt="Buy Me A Coffee"
            style={{ height: 40, width: 140 }}
          />
        </a>
        
        <h5 style={{ marginTop: 16 }}>I'm always open for a chat <a href = "mailto: info@latenightvibes.club">Email</a></h5>
      </div>
    );
  }

  return (
    <div>
      {renderAbout()}
      {renderDonate()}
      {renderInput()}
      {renderPlayer()}
    </div>
  );
}
