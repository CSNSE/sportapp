/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PersonCardOverridesProps = {
    PersonCard?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Class?: PrimitiveOverrideProps<TextProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Position?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PersonCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PersonCardOverridesProps | undefined | null;
}>;
export default function PersonCard(props: PersonCardProps): React.ReactElement;
