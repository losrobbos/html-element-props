import { ReactNode } from "react"

// merge (!) HTML element props with own props! 
// (but omit children => to prevent ANY react node as child and limit it to string as button label)
type IProps = Omit<React.ComponentProps<"button">, "children"> &
{
  variant: "primary" | "secondary"
  children: string
}

// & React.ComponentProps<"button">
// & React.ButtonHTMLAttributes<HTMLButtonElement>
  // omit children prop of button => so we can define it on our own / more strict
  // & Omit<React.ComponentProps<"button">, "children">

export const MyButton = ({ variant, children, ...props }: IProps) => {

  const style: React.CSSProperties = { 
    padding: 10, 
    borderRadius: 10, 
    backgroundColor: (variant === "primary" ? "lightblue" : "yellow") 
  }

  return <button {...props} style={style} >{children}</button>
}