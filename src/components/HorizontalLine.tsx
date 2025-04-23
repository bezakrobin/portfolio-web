import React from "react";
import { Box } from "@mui/material";

interface HorizontalLineProps {
    width?: string;
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({ width = "100px" }) => {
    return (
        <Box
            sx={{
                width: width,
                height: "55px",
                backgroundColor: "#777777",
                clipPath: "polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)",
                userSelect: "none",
                transition: "width 0.3s ease",
                "&:hover": {
                    backgroundColor: "#AAAAAA",
                },
            }}
        />
    );
};
