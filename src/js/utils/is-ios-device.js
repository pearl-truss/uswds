// iOS detection from: http://stackoverflow.com/a/9039885/177710
function isIosDevice() {
  return (
    typeof navigator !== "undefined" &&
    navigator.userAgent.match(/(iPod|iPhone|iPad)/g) &&
    !window.MSStream
  );
}

module.exports = isIosDevice;
