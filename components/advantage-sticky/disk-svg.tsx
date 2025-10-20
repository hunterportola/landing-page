interface DiskSVGProps {
  type: "fintech" | "middleware" | "core" | "bank" | "column" | "fed"
}

export function DiskSVG({ type }: DiskSVGProps) {
  // For middleware, core, and bank layers, use the bar-shaped SVG
  if (type === "middleware" || type === "core" || type === "bank") {
    return <BarSVG type={type} />
  }
  
  // For Federal Reserve, use its specific SVG
  if (type === "fed") {
    return <FederalReserveSVG />
  }
  
  // For Column, use its specific SVG
  if (type === "column") {
    return <ColumnSVG />
  }
  
  // For fintech layer, use the circular disk SVG
  return <CircularDiskSVG type={type} />
}

function BarSVG({ type }: { type: "middleware" | "core" | "bank" }) {
  const gradientId = `stack-${type}`
  
  return (
    <svg viewBox="0 0 246 193" fill="none">
      <defs>
        <linearGradient 
          id={`${gradientId}__paint0_linear`} 
          x1="157.031" 
          x2="20.918" 
          y1="77.21" 
          y2="77.21" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".589" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter 
          id={`${gradientId}__filter0_i`} 
          width="246" 
          height="160" 
          x="0" 
          y="0" 
          colorInterpolationFilters="sRGB" 
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix 
            in="SourceAlpha" 
            result="hardAlpha" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
          />
          <feOffset />
          <feGaussianBlur stdDeviation="28" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
      
      <path 
        fill="#383E4F" 
        fillRule="evenodd" 
        d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" 
        clipRule="evenodd" 
      />
      <path 
        fill="#232730" 
        fillRule="evenodd" 
        d="M123 192c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 157.183 0 113v-1c0 44.183 55.069 80 123 80zM.085 109A53.003 53.003 0 000 112v-3h.085zm245.83 0H246v3a52.47 52.47 0 00-.085-3z" 
        clipRule="evenodd" 
        opacity=".3" 
      />
      <path 
        fill="#fff" 
        fillOpacity=".2" 
        fillRule="evenodd" 
        d="M123 160c67.931 0 123-35.817 123-80v1c0 44.183-55.069 80-123 80S0 125.183 0 81v-1c0 44.183 55.069 80 123 80zM.085 77A53.006 53.006 0 000 80v-3h.085zm245.83 0H246v3c0-1.004-.028-2.004-.085-3z" 
        clipRule="evenodd" 
      />
      <path 
        fill={`url(#${gradientId}__paint0_linear)`} 
        fillRule="evenodd" 
        d="M123 160c67.931 0 123-35.817 123-80v32c0 44.183-55.069 80-123 80S0 156.183 0 112V80c0 44.183 55.069 80 123 80z" 
        clipRule="evenodd" 
        opacity=".28" 
      />
      <g filter={`url(#${gradientId}__filter0_i)`}>
        <path 
          fill="#383E4F" 
          d="M246 80c0 44.183-55.069 80-123 80S0 124.183 0 80 55.069 0 123 0s123 35.817 123 80z" 
        />
      </g>
    </svg>
  )
}

function FederalReserveSVG() {
  return (
    <svg viewBox="0 0 245 176" fill="none">
      <defs>
        <linearGradient 
          id="stack-fed__paint0_linear" 
          x1="246.095" 
          x2="0" 
          y1="165.729" 
          y2="165.729" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".681" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient 
          id="stack-fed__paint1_linear" 
          x1="156.393" 
          x2="20.833" 
          y1="77.608" 
          y2="77.608" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".589" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter 
          id="stack-fed__filter0_i" 
          width="245" 
          height="160" 
          x="0" 
          y="0" 
          colorInterpolationFilters="sRGB" 
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="16.154" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
      <path 
        fill="#12161E" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v16c0 44.183-54.845 80-122.5 80S0 140.183 0 96V80c0 44.183 54.845 80 122.5 80z" 
        clipRule="evenodd" 
      />
      <path 
        fill="#fff" 
        fillOpacity=".2" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80zM.085 77A53.221 53.221 0 000 80v-3h.085zm244.83 0H245v3c0-1.004-.028-2.004-.085-3z" 
        clipRule="evenodd" 
      />
      <path 
        fill="url(#stack-fed__paint0_linear)" 
        fillOpacity=".2" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80zM.085 77A53.221 53.221 0 000 80v-3h.085zm244.83 0H245v3c0-1.004-.028-2.004-.085-3z" 
        clipRule="evenodd" 
      />
      <path 
        fill="url(#stack-fed__paint1_linear)" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v16c0 44.183-54.845 80-122.5 80S0 140.183 0 96V80c0 44.183 54.845 80 122.5 80z" 
        clipRule="evenodd" 
        opacity=".3" 
      />
      <g filter="url(#stack-fed__filter0_i)">
        <path 
          fill="#12161E" 
          d="M245 80c0 44.183-54.845 80-122.5 80S0 124.183 0 80 54.845 0 122.5 0 245 35.817 245 80z" 
        />
      </g>
    </svg>
  )
}

function ColumnSVG() {
  return (
    <svg viewBox="0 0 245 168" fill="none">
      <defs>
        <linearGradient 
          id="stack-column__paint0_linear" 
          x1="156.393" 
          x2="20.833" 
          y1="77.808" 
          y2="77.808" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".589" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path 
        fill="#4575CD" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v8c0 44.183-54.845 80-122.5 80S0 132.183 0 88v-8c0 44.183 54.845 80 122.5 80z" 
        clipRule="evenodd" 
      />
      <path 
        fill="#fff" 
        fillOpacity=".3" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80zM.085 77A53.221 53.221 0 000 80v-3h.085zm244.83 0H245v3c0-1.004-.028-2.004-.085-3z" 
        clipRule="evenodd" 
      />
      <path 
        fill="url(#stack-column__paint0_linear)" 
        fillRule="evenodd" 
        d="M122.5 160c67.655 0 122.5-35.817 122.5-80v8c0 44.183-54.845 80-122.5 80S0 132.183 0 88v-8c0 44.183 54.845 80 122.5 80z" 
        clipRule="evenodd" 
        opacity=".28" 
      />
      <path 
        fill="#4575CD" 
        d="M245 80c0 44.183-54.845 80-122.5 80S0 124.183 0 80 54.845 0 122.5 0 245 35.817 245 80z" 
      />
    </svg>
  )
}

function CircularDiskSVG({ type }: { type: "fintech" }) {
  const gradientId = "stack-fintech"

  return (
    <svg className="stack-layer-disk" viewBox="0 0 246 176" fill="none">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M.021 81H0v15c0 44.183 55.069 80 123 80s123-35.817 123-80V81h-.021c-1.238 43.214-55.823 78-122.979 78S1.259 124.214.021 81Z" 
        fill={`url(#${gradientId}__a)`}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M.01 81H0c0 44.183 55.069 80 123 80s123-35.817 123-80h-.009c-.824 43.722-55.573 79-122.991 79S.833 124.722.01 81Z" 
        fill="#fff" 
        fillOpacity=".8"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M123 160c67.931 0 123-35.817 123-80v16c0 44.183-55.069 80-123 80S0 140.183 0 96V80c0 44.183 55.069 80 123 80ZM.085 77A53.006 53.006 0 0 0 0 80v-3h.085Zm245.83 0H246v3c0-1.004-.028-2.004-.085-3Z" 
        fill={`url(#${gradientId}__b)`}
      />
      <path 
        d="M246 80c0 44.183-55.069 80-123 80S0 124.183 0 80 55.069 0 123 0s123 35.817 123 80Z" 
        fill={`url(#${gradientId}__c)`}
      />
      <defs>
        <linearGradient 
          id={`${gradientId}__a`} 
          x1="71" 
          y1="225.5" 
          x2="44.928" 
          y2="112.214" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#ECEFF7" stopOpacity=".9" />
        </linearGradient>
        <linearGradient 
          id={`${gradientId}__b`} 
          x1="157.031" 
          y1="74.534" 
          x2="20.918" 
          y2="74.534" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".589" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient 
          id={`${gradientId}__c`} 
          x1="232.5" 
          y1="49.5" 
          x2="-141.345" 
          y2="238.297" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={getTopColor(type)} />
          <stop offset="1" stopColor={getBottomColor(type)} stopOpacity={getBottomOpacity(type)} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function getTopColor(type: string): string {
  const colors: Record<string, string> = {
    fintech: "#fff",
    column: "#0066FF",
    fed: "#1E293B"
  }
  return colors[type] || "#fff"
}

function getBottomColor(type: string): string {
  const colors: Record<string, string> = {
    fintech: "#ECEFF7",
    column: "#0052CC",
    fed: "#0F172A"
  }
  return colors[type] || "#ECEFF7"
}

function getBottomOpacity(type: string): string {
  if (type === "column" || type === "fed") return "1"
  return ".9"
}