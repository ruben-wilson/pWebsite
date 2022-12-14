const readMore = ({ preview, content, content2 }) =>{
  return (
    <div className="collapse">
      <input type="checkbox" className="peer" />
      <div className="collapse-title ">
        <p className="text-gray-400">{preview} <span className="text-gray-50 font-bold">click to read more ...</span></p>
      </div>
      <div className="collapse-content ">
        <p id="dropDown1" className="text-gray-400">{content}</p><br></br>
        <p className="text-gray-400">{content2}</p>
      </div>
    </div>
  )
}

module.exports = readMore;