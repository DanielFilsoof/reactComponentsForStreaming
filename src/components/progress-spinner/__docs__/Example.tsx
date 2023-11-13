import React, { FC } from "react";
import { ProgressSpinner, Props } from "../ProgressSpinner";

const Example: FC<Props> = (props: Props) => {
    const { size, thickness, color = 'primary' } = props;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                backgroundColor: '#011224',
                padding: "30px"
            }}
        >
            <ProgressSpinner size={size} thickness={thickness} color={color} />
        </div>
    );
};

export default Example;
