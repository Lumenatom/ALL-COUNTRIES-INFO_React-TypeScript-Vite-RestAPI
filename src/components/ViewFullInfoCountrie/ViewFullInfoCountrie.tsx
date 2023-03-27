import {useLocation, useNavigate} from "react-router-dom";
import {Container, Box, Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewFullInfoCountrie = () => {
    const {flags, name} = useLocation().state;
    const navigate = useNavigate();
    console.log(useLocation().state);

    const handleNavigate = () => {
        navigate("/");
    };
    return (
        <Box sx={{width: "xl" }}>
            <Box>
                <Button onClick={handleNavigate} variant="outlined" size="large"
                        sx={{
                            color: '#000000',
                            display: 'flex',
                            gap: "5px",
                            fontWeight: '700',
                            marginBottom: '10px'
                        }}><ArrowBackIcon/>Back</Button>
            </Box>

            <div>
                <Box
                    component="img"
                    sx={{
                        height: '700px',
                        width: "100%",
                        borderRadius: '10px',
                        boxShadow: 3,

                    }}
                    alt={name.official} src={flags.svg}
                />
                <h2>{name.official}</h2>
            </div>
        </Box>

    );
};
export default ViewFullInfoCountrie;
