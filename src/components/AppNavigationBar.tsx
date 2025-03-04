import React from "react";
import { AppBar, Toolbar, Grid2 } from "@mui/material";
import { DoubleLineText } from "./DoubleLineText.tsx";

export const AppNavigationBar: React.FC = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                userSelect: "none"
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", pt: "20px", ml: "30px" }}>
                    <Grid2 item xs={3}>
                        <DoubleLineText line1="Robin" line2="Bezak" color="#AAAAAA" />
                    </Grid2>
                    <Grid2 item xs={3}>
                        <DoubleLineText line1="Almost fullstack dev" line2="folio / 2024 - 2025" color="#777777" />
                    </Grid2>
                    <Grid2 item xs={3}>
                        {/* Empty */}
                    </Grid2>
                    <Grid2 item xs={3}>
                        {/* Empty */}
                    </Grid2>
            </Toolbar>
        </AppBar>
    );
};
