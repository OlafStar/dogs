import { PropsWithChildren } from "react";
import { Text, TextProps, TextStyle } from "react-native";

const fontFamilyMapping = {
  extralight: "ClashGrotesk-Extralight",
  light: "ClashGrotesk-Light",
  regular: "ClashGrotesk-Regular",
  medium: "ClashGrotesk-Medium",
  semibold: "ClashGrotesk-Semibold",
  bold: "ClashGrotesk-Bold",
} as const;

type FontStyle = keyof typeof fontFamilyMapping;

type CustomTextProps = Omit<TextProps, "size"> & {
  weight?: FontStyle;
  size?: number;
  style?: TextStyle;
} & PropsWithChildren;

const CustomText = ({
  children,
  weight = "regular",
  size = 16,
  style,
}: CustomTextProps) => {
  return (
    <Text
      style={{
        //@ts-expect-error
        ...style,
        fontFamily: fontFamilyMapping[weight],
        fontSize: size,
      }}>
      {children}
    </Text>
  );
};

export default CustomText;
