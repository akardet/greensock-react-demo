import React from "react";

export default function timelineButtons({ tl }) {
  console.log(tl);
  return (
    <div className="timelineBtns">
      <button className="btn ripple" onClick={() => this.tl.play()}>
        Play
      </button>
      <button className="btn ripple" onClick={() => this.tl.pause()}>
        Pause
      </button>
      <button className="btn ripple" onClick={() => this.tl.reverse()}>
        Reverse
      </button>
      <button className="btn ripple" onClick={() => this.tl.restart()}>
        Restart
      </button>
    </div>
  );
}
