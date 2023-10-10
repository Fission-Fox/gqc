import "@/assets/css/tailwind.css";
import "@/assets/scss/icons.scss";
import "@/assets/scss/tailwind.scss";
import { Box } from "@mui/material";
import Header from "../Header";

type Prop = {
    children: JSX.Element
}
export default function Layout({ children }: Prop) {
    return (
        <Box>
            <Header />
            {children}
        </Box>
    )
}
