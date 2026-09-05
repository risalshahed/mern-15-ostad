import BedroomSvg from "./svg/Properties/BedroomSvg.jsx"
import RestroomSvg from "./svg/Properties/RestroomSvg.jsx"

const EachProperty = ({ property }) => {
  const { image, title, facilities, cost, bedroom, restroom } = property

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img
        src={image}
        alt={title}
      />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">
          {title}
        </h4>
        <div>
          {facilities}
        </div>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${cost.toFixed(2)}</span> /M
        </div>

      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedroomSvg />
          <p><span className="font-bold text-gray-900">{bedroom}</span> Bedrooms</p>
        </div>
        <div className="flex items-center">
          <RestroomSvg />
          <p><span className="font-bold text-gray-900">{restroom}</span> Bathrooms</p>
        </div>
      </div>
    </div>
  )
}

export default EachProperty