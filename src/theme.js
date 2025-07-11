import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: {
            50: '#E8F5E8',
            100: '#C3E6C3',
            200: '#9BD79B',
            300: '#6FC76F',
            400: '#4FB84F',
            500: '#059C02', // Main primary color
            600: '#047F01',
            700: '#036201',
            800: '#024601',
            900: '#012F01',
        },
        shade: '#91B584',
        light: '#FFFFFF',
        dark: '#2F4858',
    },
    fonts: {
        body: '"Inter", sans-serif',
        heading: '"Raleway", sans-serif',
        title: '"Raleway", sans-serif',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.800',
            },
        },
    },
});

export default theme; 