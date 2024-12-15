import { cn } from "./lb/utils/cn"

export const Container =({className, children})=>{
  return(
    <div className={cn("max-w-screen-2xl mx-auto lg:px-12 md:px-8 px-6 w-full", className)}>
      {children}
    </div>
  )
}