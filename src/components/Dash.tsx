import React from "react";
import { Box } from "@mui/material";

export const Dash: React.FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "55px",
                backgroundColor: "#777777",
                clipPath: "polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)",
                userSelect: "none",
                "&:hover": {
                    backgroundColor: "#AAAAAA",
                }
            }}
        />
    );
};
