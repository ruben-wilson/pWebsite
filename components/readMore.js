const readMore = ({preview, content}) =>{
  return (
    <div className="collapse">
      <input type="checkbox" className="peer" />
      <div className="collapse-title ">
        <p className="text-gray-400">{preview} <span className="text-gray-50 font-bold">click to read more ...</span></p>
      </div>
      <div className="collapse-content ">
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  )
}

module.exports = readMore;