/* eslint-disable react/prop-types */
import { Loader2 } from "lucide-react"
const Button = ({
  onClick = () => {},
  content,
  type = "button",
  isLoading = false,
  size = "large",
}) => {
  return (
    <button
      type={type}
      className={`px-2 text-center rounded-md ${
        type == "submit"
          ? "w-full bg-rose-600 hover:bg-rose-700 my-4 py-2"
          : `${
              type == "button"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            } my-2 py-0.5 ${
              size == "medium" ? "w-48" : size == "small" ? "w-24 " : "w-64"
            } `
      }   transition-all duration-300`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
export default Button
