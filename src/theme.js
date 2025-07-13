import { createSystem, defaultConfig } from '@chakra-ui/react';

const config = {
    ...defaultConfig,
    theme: {
        tokens: {
            colors: {
                primary: {
                    50: { value: '#E8F5E8' },
                    100: { value: '#C3E6C3' },
                    200: { value: '#9BD79B' },
                    300: { value: '#6FC76F' },
                    400: { value: '#4FB84F' },
                    500: { value: '#059C02' }, // Main primary color
                    600: { value: '#047F01' },
                    700: { value: '#036201' },
                    800: { value: '#024601' },
                    900: { value: '#012F01' },
                },
                green: {
                    50: { value: '#E8F5E8' },
                    100: { value: '#C3E6C3' },
                    200: { value: '#9BD79B' },
                    300: { value: '#6FC76F' },
                    400: { value: '#4FB84F' },
                    500: { value: '#059C02' },
                    600: { value: '#047F01' },
                    700: { value: '#036201' },
                    800: { value: '#024601' },
                    900: { value: '#012F01' },
                },
                shade: { value: '#91B584' },
                light: { value: '#FFFFFF' },
                dark: { value: '#2F4858' },
            },
            fonts: {
                body: { value: '"Inter", sans-serif' },
                heading: { value: '"Raleway", sans-serif' },
                title: { value: '"Raleway", sans-serif' },
            },
        },
    },
    globalCss: {
        body: {
            bg: 'white',
            color: 'gray.800',
            fontFamily: 'body',
        },
    },
};

const system = createSystem(config);

export default system; 