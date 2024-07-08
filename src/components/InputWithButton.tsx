import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"
import React from "react"

export interface InputWithButtonProps
    extends React.InputHTMLAttributes<HTMLDivElement> { }


export const InputWithButton = React.forwardRef<HTMLDivElement, InputWithButtonProps>(({ className, type, ...props }, ref) => (
    <div className={cn("flex w-full max-w-sm items-center", className)} ref={ref} {...props}>
        <Input type="email" placeholder="Email" className="rounded-r-none border-r-0" />
        <Button type="submit" className="rounded-l-none">Subscribe</Button>
    </div>
))
InputWithButton.displayName = "InputWithButton"