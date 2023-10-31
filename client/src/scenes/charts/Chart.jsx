import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid ,GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockProductData } from "../../data/mockData";
import Header from "../../components/Header";
import { Routes, Route,Outlet } from "react-router-dom";



const Chart = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.pallete.mode);
    
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">

                <Header title="Charts" subtitle="View your charts" />

            </Box>
            <Outlet />
        </Box>
    )
}
export default Chart;