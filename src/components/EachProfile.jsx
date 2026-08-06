// const EachProfile = (props) => {
const EachProfile = ({ martyr }) => {
  // console.log(props); // {martyr: {martyr: {id, name, ...}}}
  // console.log(props.martyr); // {martyr: {id, name, ...}}

  // After Destructure
  // console.log(martyr)

  const { name, profession, avatar } = martyr;

  return (
    <div>
      {/* Ctrl + D or Command + D */}
      {/* All Select -> Ctrl / Command + F2 */}
      {/* All Select -> Ctrl / Command + Shift + L */}
      <img src={avatar} alt={name} />
      <h2>
        Name: {name}
      </h2>
      <p>
        Profession: {profession}
      </p>
    </div>
  )
}

export default EachProfile