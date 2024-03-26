/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import ReviewNavBar from "./ReviewNavBar";
import { Flex } from "@aws-amplify/ui-react";
export default function SportNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SportNavBar")}
      {...rest}
    >
      <ReviewNavBar
        display="flex"
        gap="20px"
        direction="row"
        width="406px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 32px 24px 23px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ReviewNavBar")}
      ></ReviewNavBar>
    </Flex>
  );
}
