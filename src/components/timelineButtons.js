import React from "react";

export default function timelineButtons() {
  return (
    <div className="timelineBtns">
      <button className="btn ripple" _onClick={() => this.tl.play()}>
        Play
      </button>
      <button className="btn ripple" _onClick={() => this.tl.pause()}>
        Pause
      </button>
      <button className="btn ripple" _onClick={() => this.tl.reverse()}>
        Reverse
      </button>
      <button className="btn ripple" _onClick={() => this.tl.restart()}>
        Restart
      </button>
    </div>
  );
}
