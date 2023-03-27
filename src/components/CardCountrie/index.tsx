import {FC, useEffect, useState} from "react";
import {CountryData} from "../../types/types";
import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';

const CardCountrie: FC<CountryData> = (countrie) => {
    const {flags, name, languages, population} = countrie;
    const [langueges, setLaungueges] = useState<string[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (languages) {
            const allLangueges: string[] = Object.values(languages);
            setLaungueges(allLangueges);
        }
    }, [languages]);

    const handleNavigate = (): void => {
        navigate(`/countrie/${countrie.name.official}`, {state: countrie});
    };

    const boxProps = {
        boxShadow: 5,
        borderRadius: '10px',
        width: '350px',
        height: '400px',
        marginBottom: '50px',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'stretch',
        cursor: 'pointer',
        transition: "scale 0.3s",
        paddingBottom: '20px',


        "&:hover": {
            scale: '1.1',
            transition: "scale 0.3s",
        }
    }

    return (
        <Box sx={boxProps} onClick={handleNavigate}>
            <Box
                component="img"
                sx={{
                    height: '200px',
                    width: "350px",
                    borderRadius: '10px',
                    boxShadow: 3,

                }}
                alt={name.official} src={flags.png}
            />
            <Typography variant="h5" sx={{
                textAlign: 'center',
                fontWeight: 400,
                marginTop: '20px',
                paddingX: '10px'
            }}>{ name.official === "Russian Federation" ? `russian federation  COUNTRY TERRORIST` : name.official}</Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '70px',
                color: 'rgba(0,0,0,0.6)',
            }}>
                <InfoIcon/>
                <Typography variant="subtitle2" sx={{
                    textAlign: 'center',
                    fontWeight: 400,
                    paddingX: '10px'
                }}>
                    Click for more information</Typography>
            </Box>


        </Box>
    );
};

export default CardCountrie;
