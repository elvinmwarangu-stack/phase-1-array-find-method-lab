// code your solution here
// superbowl.js

function superbowlWin(record) {
  const win = record.find(entry => entry.result === "W");
  return win ? win.year : undefined;
}

module.exports = superbowlWin;