import { SVGProps } from "react";
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="white"
        {...props}
    >
        <path
            fill="#333"
            d="M28 16a1 1 0 0 1-1 1H17v10a1 1 0 0 1-2 0V17H5a1 1 0 0 1 0-2h10V5a1 1 0 0 1 2 0v10h10a1 1 0 0 1 1 1Z"
        />
    </svg>
);
export { PlusIcon };
