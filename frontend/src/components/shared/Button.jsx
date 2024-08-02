/* eslint-disable react/prop-types */
const Button = ({ onClick = () => {}, content, type = "button" }) => {
  return (
    <button
      type={type}
      className={`px-2  rounded-md ${
        type == "submit"
          ? "w-full bg-rose-600 hover:bg-rose-700 my-4 py-2"
          : "w-24 bg-green-600 hover:bg-green-700 py-0.5"
      }   transition-all duration-300`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
export default Button
