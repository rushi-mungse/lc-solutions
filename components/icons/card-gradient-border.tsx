type CardGradientProps = {
  from?: string;
  to?: string;
} & React.HTMLAttributes<HTMLOrSVGElement>;

export const CardGradientBorder = ({
  from = "#33CEFF",
  to = "#33CEFF",
  ...props
}: CardGradientProps) => {
  return (
    <svg
      preserveAspectRatio="none"
      width="384"
      height="366"
      viewBox="0 0 384 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        vectorEffect="non-scaling-stroke"
        d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
        stroke="#7a87ef"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
        stroke="url(#paint0_linear_333_9188)"
        strokeOpacity="0.85"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_333_9188"
          x1="192"
          y1="0"
          x2="192"
          y2="366"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={from} />
          <stop offset="0.562842" stopColor={to} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
