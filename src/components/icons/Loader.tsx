import * as React from "react";
import type { SVGProps } from "react";
const SvgLoader = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M8 1.333V4m0 8v2.667M3.287 3.287l1.886 1.886m5.654 5.654 1.886 1.886M1.333 8H4m8 0h2.667m-11.38 4.713 1.886-1.886m5.654-5.654 1.886-1.886"
        />
    </svg>
);
export default SvgLoader;
