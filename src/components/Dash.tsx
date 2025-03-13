import React from "react";
import { Box } from "@mui/material";

interface DashProps {
    width?: string;
}

export const Dash: React.FC<DashProps> = ({ width = "100px" }) => {
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
