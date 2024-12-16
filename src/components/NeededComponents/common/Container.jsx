import { cn } from "../lb/utils/cn"

export const Container =({className, children})=>{
  return(
    <div className={cn("max-w-screen-2xl mx-auto lg:px-12 md:px-8 px-1 w-full border-b py-4", className)}>
      {children}
    </div>
  )
}