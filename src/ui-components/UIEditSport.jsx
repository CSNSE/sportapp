/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function UIEditSport(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="627px"
      height="1581px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UIEditSport")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        height="1581px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children="Edit Sports Profile"
            {...getOverrideProps(overrides, "Edit Sports Profile")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider42611455")}
        ></Divider>
        <View
          width="unset"
          height="1362px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="272px"
            height="72px"
            label="Full Name"
            position="absolute"
            top="-5px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611457")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="Graduation Year"
            position="absolute"
            top="-5px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611458")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="Height"
            position="absolute"
            top="75px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611459")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="Weight"
            position="absolute"
            top="75px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611460")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="Email"
            position="absolute"
            top="155px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611461")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="Phone Number"
            position="absolute"
            top="155px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611462")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="GPA"
            position="absolute"
            top="235px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611463")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="Class Rank"
            position="absolute"
            top="235px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611464")}
          ></TextField>
          <TextField
            width="272px"
            height="72px"
            label="SAT Score"
            position="absolute"
            top="315px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611465")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="ACT Score"
            position="absolute"
            top="315px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611466")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="AP Classes"
            position="absolute"
            top="395px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611467")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Coach Name"
            position="absolute"
            top="395px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611468")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Coach Phone Number"
            position="absolute"
            top="475px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611469")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Coach Email"
            position="absolute"
            top="475px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611470")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Parent(s) Name"
            position="absolute"
            top="555px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611471")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Address"
            position="absolute"
            top="635px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611472")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Team"
            position="absolute"
            top="715px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611473")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Sport"
            position="absolute"
            top="715px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611474")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Highlight Link"
            position="absolute"
            top="795px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611475")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Position"
            position="absolute"
            top="795px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611476")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Jersey #"
            position="absolute"
            top="875px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611477")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Stat 1"
            position="absolute"
            top="875px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611478")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Stat 2"
            position="absolute"
            top="955px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611479")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Stat 3"
            position="absolute"
            top="955px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611480")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Stat 4"
            position="absolute"
            top="1035px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611481")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Stat 6"
            position="absolute"
            top="1115px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611482")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Volunteering"
            position="absolute"
            top="1115px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611483")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Hobbies"
            position="absolute"
            top="1195px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611484")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Image"
            position="absolute"
            top="1275px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611485")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Other Sports"
            position="absolute"
            top="1195px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611486")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Stat 5"
            position="absolute"
            top="1035px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611487")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Parent Phone Number"
            position="absolute"
            top="555px"
            left="320px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611488")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Parent(s) Email"
            position="absolute"
            top="635px"
            left="24px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42611489")}
          ></TextField>
        </View>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider42611490")}
        ></Divider>
        <View
          width="592px"
          height="66px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 322")}
        >
          <Button
            width="142px"
            height="unset"
            position="absolute"
            top="12px"
            left="225px"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="default"
            children="Save"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
      </Flex>
    </View>
  );
}
