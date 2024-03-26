/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SportCardOverridesProps = {
    SportCard?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Name4178767?: PrimitiveOverrideProps<TextProps>;
    "Sports Info"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 325"?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area4178901"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4178902"?: PrimitiveOverrideProps<FlexProps>;
    "Personal Info"?: PrimitiveOverrideProps<TextProps>;
    Name4178904?: PrimitiveOverrideProps<TextProps>;
    "Graduation Year"?: PrimitiveOverrideProps<TextProps>;
    Height?: PrimitiveOverrideProps<TextProps>;
    Weight?: PrimitiveOverrideProps<TextProps>;
    Email4200401?: PrimitiveOverrideProps<TextProps>;
    "Phone Number4200402"?: PrimitiveOverrideProps<TextProps>;
    "Card Area4190424"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4190425"?: PrimitiveOverrideProps<FlexProps>;
    "Sport Info"?: PrimitiveOverrideProps<TextProps>;
    Sport?: PrimitiveOverrideProps<TextProps>;
    Team?: PrimitiveOverrideProps<TextProps>;
    Position?: PrimitiveOverrideProps<TextProps>;
    Jersey?: PrimitiveOverrideProps<TextProps>;
    "Card Area4201411"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4201412"?: PrimitiveOverrideProps<FlexProps>;
    Stats?: PrimitiveOverrideProps<TextProps>;
    "Stat 1"?: PrimitiveOverrideProps<TextProps>;
    "Stat 2"?: PrimitiveOverrideProps<TextProps>;
    "Stat 3"?: PrimitiveOverrideProps<TextProps>;
    "Stat 4"?: PrimitiveOverrideProps<TextProps>;
    "Stat 5"?: PrimitiveOverrideProps<TextProps>;
    "Stat 6"?: PrimitiveOverrideProps<TextProps>;
    "Card Area4216482"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4216483"?: PrimitiveOverrideProps<FlexProps>;
    Extracurriculars?: PrimitiveOverrideProps<TextProps>;
    Volunteering?: PrimitiveOverrideProps<TextProps>;
    Hobbies?: PrimitiveOverrideProps<TextProps>;
    "Other Sports"?: PrimitiveOverrideProps<TextProps>;
    "Card Area4190429"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4190430"?: PrimitiveOverrideProps<FlexProps>;
    "Academic Info"?: PrimitiveOverrideProps<TextProps>;
    GPA?: PrimitiveOverrideProps<TextProps>;
    "Class Rank"?: PrimitiveOverrideProps<TextProps>;
    "SAT Score"?: PrimitiveOverrideProps<TextProps>;
    "ACT Score"?: PrimitiveOverrideProps<TextProps>;
    "AP Classes"?: PrimitiveOverrideProps<TextProps>;
    "Card Area4190444"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4190445"?: PrimitiveOverrideProps<FlexProps>;
    "Parent Info"?: PrimitiveOverrideProps<TextProps>;
    "Parents Name"?: PrimitiveOverrideProps<TextProps>;
    "Phone Number4190448"?: PrimitiveOverrideProps<TextProps>;
    Email4215477?: PrimitiveOverrideProps<TextProps>;
    Address?: PrimitiveOverrideProps<TextProps>;
    "Card Area4190449"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group4190450"?: PrimitiveOverrideProps<FlexProps>;
    "Coach Info"?: PrimitiveOverrideProps<TextProps>;
    "Coach Name"?: PrimitiveOverrideProps<TextProps>;
    "Phone Number4190453"?: PrimitiveOverrideProps<TextProps>;
    Email4201410?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SportCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SportCardOverridesProps | undefined | null;
}>;
export default function SportCard(props: SportCardProps): React.ReactElement;
