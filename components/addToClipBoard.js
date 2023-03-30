
const clipBoard = (id) => {
  const copyText = document.getElementById(`#Number`);
  navigator.clipboard.writeText(copyText.value)

  alert(`Copied ${id} to your clipBoard`);
}

module.exports = clipBoard;