import { cn } from "@/lib/utils"
import { DiskSVG } from "./disk-svg"

interface StackLayerProps {
  type: "fintech" | "middleware" | "core" | "bank" | "column" | "fed"
  label: string
}

export function StackLayer({ type, label }: StackLayerProps) {
  return (
    <div className={cn("stack-layer", `stack-layer-${type}`)}>
      <div className="stack-label">
        <h4 className="stack-label-text text-sm font-medium">
          {label}
        </h4>
      </div>
      <div className="stack-layer-disk">
        <DiskSVG type={type} />
      </div>
    </div>
  )
}