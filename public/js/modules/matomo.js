export default () => {
  const audio = document.getElementById("audio");

  if (audio) {
    let trackTitle = "";

    audio.addEventListener("play", () => {
      trackTitle = document.querySelector(".track-title-text").innerText.trim();
      window._paq.push(["trackEvent", "Audio", "Play", trackTitle]);
    });

    audio.addEventListener("ended", () => {
      window._paq.push(["trackEvent", "Audio", "Completed", trackTitle]);
    });
  }
};
