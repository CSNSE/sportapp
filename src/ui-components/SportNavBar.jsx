/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function SportNavBar(props) {
  const { overrides, ...rest } = props;
  const homePageOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useNavigateAction({ type: "url", url: "/newt" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="406px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 23px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SportNavBar")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sports Info"
          {...getOverrideProps(overrides, "Sports Info")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="89px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home Page"
          onClick={() => {
            homePageOnClick();
          }}
          {...getOverrideProps(overrides, "Home Page")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        border="5px SOLID rgba(13,26,38,1)"
        borderRadius="4px"
        padding="3px 11px 3px 11px"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Add Team"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
