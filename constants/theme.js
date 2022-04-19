import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    brown:'#6A2700',
    lightGray: "#B83B5E",
    gray: "#BEC1D2",
    mitti:"#F08A5D",
    blue:'#332FD0',
    green:'#357C3C',
};

export const SIZES = {
    // global sizes
    base: 8,
    radius: 10,
    font: 14,
    padding: 24,

    // font sizes
    navTitle: 25,
    h1: 24,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6:12,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    navTitle: { fontFamily: "CarmenSans-Thin", fontSize: SIZES.navTitle },
    largeTitleBold: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h2 },
    h1: {  fontSize: SIZES.h1, lineHeight: 36 },
    h2: {  fontSize: SIZES.h2, lineHeight: 30 },
    h3: {  fontSize: SIZES.h3, lineHeight: 22 },
    h4: {  fontSize: SIZES.h4, lineHeight: 22 },
    h5: {  fontSize: SIZES.h5, lineHeight: 22 },
    body1: {  fontSize: SIZES.body1, lineHeight: 36 },
    body2: {  fontSize: SIZES.body2, lineHeight: 30 },
    body3: {  fontSize: SIZES.body3, lineHeight: 22 },
    body4: {  fontSize: SIZES.body4, lineHeight: 22 },
    body5: {  fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;