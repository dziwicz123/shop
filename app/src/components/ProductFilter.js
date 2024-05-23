import React, { useState, useEffect } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
const ProductFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    producers: {
      HP: false,
      Dell: false,
      ASUS: false,
      'Green Cell': false,
      Acer: false,
    },
    priceFrom: '',
    priceTo: '',
    availability: '',
    hideUnavailable: false,
    status: {
      Promocja: false,
    },
  });
  //ToDo umiejscowienie
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleCheckboxChange = (event, category) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [name]: checked,
      },
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: value,
    }));
  };

  const handleHideUnavailableChange = (event) => {
    const { checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      hideUnavailable: checked,
    }));
  };

  return (
    <Box sx={{ padding: 2, width: 300 }}>
      <Typography variant="h6">Filtry</Typography>
      <Box mt={2}>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Producent</FormLabel>
          <FormGroup>
            {Object.keys(filters.producers).map((producer) => (
              <FormControlLabel
                key={producer}
                control={
                  <Checkbox
                    name={producer}
                    checked={filters.producers[producer]}
                    onChange={(e) => handleCheckboxChange(e, 'producers')}
                  />
                }
                label={producer}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle1">Cena</Typography>
        <Box display="flex" justifyContent="space-between">
          <Input
            placeholder="od"
            type="number"
            name="priceFrom"
            value={filters.priceFrom}
            onChange={handleInputChange}
          />
          <Input
            placeholder="do"
            type="number"
            name="priceTo"
            value={filters.priceTo}
            onChange={handleInputChange}
          />
        </Box>
      </Box>

      <Box mt={2}>
        <FormControl fullWidth>
          <FormLabel component="legend">Dostępność</FormLabel>
          <Select value={filters.availability} onChange={handleSelectChange} displayEmpty>
            <MenuItem value="">Dostępny</MenuItem>
            <MenuItem value="unavailable">Niedostępny</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mt={2}>
        <FormControlLabel
          control={
            <Checkbox
              name="hideUnavailable"
              checked={filters.hideUnavailable}
              onChange={handleHideUnavailableChange}
            />
          }
          label="Ukryj czasowo niedostępne"
        />
      </Box>

      <Box mt={2}>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Status</FormLabel>
          <FormGroup>
            {Object.keys(filters.status).map((status) => (
              <FormControlLabel
                key={status}
                control={
                  <Checkbox
                    name={status}
                    checked={filters.status[status]}
                    onChange={(e) => handleCheckboxChange(e, 'status')}
                  />
                }
                label={status}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ProductFilter;
