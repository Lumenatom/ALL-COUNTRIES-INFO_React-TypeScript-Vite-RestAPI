import {useState} from "react";
import useGetAllCountries from "../../hooks/useGetAllCountries";
import {CountryData} from "../../types/types";
import CardCountries from "../CardCountrie";
import {Container, Box, TextField, InputAdornment, AppBar, Grid} from "@mui/material";

const Countries = () => {
    const [valueSearch, setValueSearch] = useState<string>("");
    const {countries} = useGetAllCountries();

    const findCountrie = (): CountryData[] => {
        return countries.filter(({name}) =>
            name.official.toLowerCase().includes(valueSearch.toLowerCase())
        );
    };

    // console.log(countries);

    return (
        <Container maxWidth="xl">
            <Grid container >
                <Grid xs={12}>
                    <TextField fullWidth autoFocus id="outlined-basic" margin="normal" label="Enter name countrie"
                               variant="outlined"
                               onChange={(e) => setValueSearch(e.target.value)}
                    />
                </Grid>
                <Grid xs={12} container justifyContent="space-between" marginTop={'20px'}>
                            {findCountrie().map((countrie: CountryData) => (
                                <Grid>
                                    <CardCountries key={countrie.name.official} {...countrie} />
                                </Grid>
                            ))}
                </Grid>
            </Grid >
        </Container>
    );
};

export default Countries;
