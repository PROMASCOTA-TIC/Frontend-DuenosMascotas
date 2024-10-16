import { Search } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";

import '/src/assets/styles/gestionContenido/general.css';

const BarraDeBusqueda = () => {
    return (
        <Box
            className='bg-tertiary20 p-21 txt-center txtcolor-primary'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '34px'
            }}
        >
            <h1 className="h1-bold">¿En qué podemos ayudarte?</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '21px', }}>
                <TextField
                    variant="outlined"
                    placeholder="Escribe palabras de búsqueda"
                    sx={{
                        borderRadius: '15px',
                        backgroundColor: 'white',
                        minWidth: '300px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderRadius: '15px',
                            },
                        },
                        '& .MuiInputBase-input': {
                            height: 'auto',
                            textAlign: 'center',
                        },
                    }}
                />

                <IconButton
                className="bg-secondary"
                    sx={{ borderRadius: '100px'}}
                >
                    <Search />
                </IconButton>
            </div>
            <p className="n-semiBold">También puedes revisar los siguientes temas para encontrar la información que buscas.</p>
        </Box>
    );
};

export default BarraDeBusqueda;