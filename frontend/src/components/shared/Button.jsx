/* eslint-disable react/prop-types */
import { Loader2 } from "lucide-react"
const Button = ({
  onClick = () => {},
  content,
  type = "button",
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      className={`px-2 text-center rounded-md ${
        type == "submit"
          ? "w-full bg-rose-600 hover:bg-rose-700 my-4 py-2"
          : "w-64 bg-green-600 hover:bg-green-700 my-2 py-0.5"
      }   transition-all duration-300`}
      onClick={onClick}
    >
      {isLoading ? <p className="text-center"><Loader2 className="animate-spin" /></p> : content}
    </button>
  )
}
export default Button
