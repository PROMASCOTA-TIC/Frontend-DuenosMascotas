"use client";
import React from 'react'
import { MenuItem, FormControl, Select, InputLabel, SelectChangeEvent } from '@mui/material';

export const ZoneAndShipping = () => {
    const [delivery, setDelivery] = React.useState<string>('');
    const [sector, setSector] = React.useState<string>('');
    const [address, setAddress] = React.useState<string>('');

    const handleDeliveryChange = (event: SelectChangeEvent<string>) => {
        setDelivery(event.target.value);
    };

    const handleSectorChange = (event: SelectChangeEvent<string>) => {
        setSector(event.target.value);
    };

    const handleAddressChange = (event: SelectChangeEvent<string>) => {
        setAddress(event.target.value);
    };

    return (
        <div className="flex space-x-[21px] ms-[21px] my-[13px]">
            {/* Opciones de Entrega */}
            <FormControl variant="outlined" size="small" sx={{ minWidth: 200, maxWidth: 275,borderRadius: '16px' }}>
                <InputLabel>Opciones entrega</InputLabel>
                <Select
                    value={delivery}
                    onChange={handleDeliveryChange}
                    label="Opciones entrega"
                >
                    <MenuItem value="Entrega">Entrega</MenuItem>
                    <MenuItem value="Recoger">Recoger</MenuItem>
                </Select>
            </FormControl>

            {/* Sector */}
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120, borderRadius: '16px' }}>
                <InputLabel>Sector</InputLabel>
                <Select
                    value={sector}
                    onChange={handleSectorChange}
                    label="Sector"
                >
                    <MenuItem value="Norte">Norte</MenuItem>
                    <MenuItem value="Sur">Sur</MenuItem>
                    <MenuItem value="Centro">Centro</MenuItem>
                </Select>
            </FormControl>

            {/* Dirección */}
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120, borderRadius: '16px' }}>
                <InputLabel>Dirección</InputLabel>
                <Select
                    value={address}
                    onChange={handleAddressChange}
                    label="Dirección"
                >
                    <MenuItem value="Casa">Casa</MenuItem>
                    <MenuItem value="Oficina">Oficina</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}