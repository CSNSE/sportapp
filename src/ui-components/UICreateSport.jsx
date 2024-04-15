/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSport } from "../graphql/mutations";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function UICreateSport(props) {
  const { s, overrides, ...rest } = props;
  const [
    textFieldFourTwoSixZeroNineFiveFiveValue,
    setTextFieldFourTwoSixZeroNineFiveFiveValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineFiveSixValue,
    setTextFieldFourTwoSixZeroNineFiveSixValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineFiveSevenValue,
    setTextFieldFourTwoSixZeroNineFiveSevenValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineFiveEightValue,
    setTextFieldFourTwoSixZeroNineFiveEightValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineFiveNineValue,
    setTextFieldFourTwoSixZeroNineFiveNineValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixZeroValue,
    setTextFieldFourTwoSixZeroNineSixZeroValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixOneValue,
    setTextFieldFourTwoSixZeroNineSixOneValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixTwoValue,
    setTextFieldFourTwoSixZeroNineSixTwoValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixThreeValue,
    setTextFieldFourTwoSixZeroNineSixThreeValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixFourValue,
    setTextFieldFourTwoSixZeroNineSixFourValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixFiveValue,
    setTextFieldFourTwoSixZeroNineSixFiveValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixSixValue,
    setTextFieldFourTwoSixZeroNineSixSixValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixSevenValue,
    setTextFieldFourTwoSixZeroNineSixSevenValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixEightValue,
    setTextFieldFourTwoSixZeroNineSixEightValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSixNineValue,
    setTextFieldFourTwoSixZeroNineSixNineValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightFiveValue,
    setTextFieldFourTwoSixZeroNineEightFiveValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightSixValue,
    setTextFieldFourTwoSixZeroNineEightSixValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenZeroValue,
    setTextFieldFourTwoSixZeroNineSevenZeroValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenTwoValue,
    setTextFieldFourTwoSixZeroNineSevenTwoValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenOneValue,
    setTextFieldFourTwoSixZeroNineSevenOneValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenFourValue,
    setTextFieldFourTwoSixZeroNineSevenFourValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenThreeValue,
    setTextFieldFourTwoSixZeroNineSevenThreeValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenFiveValue,
    setTextFieldFourTwoSixZeroNineSevenFiveValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenSixValue,
    setTextFieldFourTwoSixZeroNineSevenSixValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenSevenValue,
    setTextFieldFourTwoSixZeroNineSevenSevenValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenEightValue,
    setTextFieldFourTwoSixZeroNineSevenEightValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineSevenNineValue,
    setTextFieldFourTwoSixZeroNineSevenNineValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightFourValue,
    setTextFieldFourTwoSixZeroNineEightFourValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightZeroValue,
    setTextFieldFourTwoSixZeroNineEightZeroValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightOneValue,
    setTextFieldFourTwoSixZeroNineEightOneValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightTwoValue,
    setTextFieldFourTwoSixZeroNineEightTwoValue,
  ] = useState("");
  const [
    textFieldFourTwoSixZeroNineEightThreeValue,
    setTextFieldFourTwoSixZeroNineEightThreeValue,
  ] = useState("");
  const [
    textFieldFourTwoSixOneOneOneNineFiveValue,
    setTextFieldFourTwoSixOneOneOneNineFiveValue,
  ] = useState("");
  const iconOnClick = useNavigateAction({ type: "url", url: "/person" });
  const vectorOnClick = useNavigateAction({ type: "url", url: "/person" });
  const buttonOnClick = async () => {
    await client.graphql({
      query: createSport.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourTwoSixZeroNineFiveFiveValue,
          grad: textFieldFourTwoSixZeroNineFiveSixValue,
          height: textFieldFourTwoSixZeroNineFiveSevenValue,
          weight: textFieldFourTwoSixZeroNineFiveEightValue,
          email: textFieldFourTwoSixZeroNineFiveNineValue,
          phone: textFieldFourTwoSixZeroNineSixZeroValue,
          gpa: textFieldFourTwoSixZeroNineSixOneValue,
          rank: textFieldFourTwoSixZeroNineSixTwoValue,
          sat: textFieldFourTwoSixZeroNineSixThreeValue,
          act: textFieldFourTwoSixZeroNineSixFourValue,
          aps: textFieldFourTwoSixZeroNineSixFiveValue,
          coachname: textFieldFourTwoSixZeroNineSixSixValue,
          coachphone: textFieldFourTwoSixZeroNineSixSevenValue,
          coachemail: textFieldFourTwoSixZeroNineSixEightValue,
          parentname: textFieldFourTwoSixZeroNineSixNineValue,
          parentphone: textFieldFourTwoSixZeroNineEightFiveValue,
          parentemail: textFieldFourTwoSixZeroNineEightSixValue,
          address: textFieldFourTwoSixZeroNineSevenZeroValue,
          sport: textFieldFourTwoSixZeroNineSevenTwoValue,
          team: textFieldFourTwoSixZeroNineSevenOneValue,
          position: textFieldFourTwoSixZeroNineSevenFourValue,
          highlight: textFieldFourTwoSixZeroNineSevenThreeValue,
          jersey: textFieldFourTwoSixZeroNineSevenFiveValue,
          stat1: textFieldFourTwoSixZeroNineSevenSixValue,
          stat2: textFieldFourTwoSixZeroNineSevenSevenValue,
          stat3: textFieldFourTwoSixZeroNineSevenEightValue,
          stat4: textFieldFourTwoSixZeroNineSevenNineValue,
          stat5: textFieldFourTwoSixZeroNineEightFourValue,
          stat6: textFieldFourTwoSixZeroNineEightZeroValue,
          volunteer: textFieldFourTwoSixZeroNineEightOneValue,
          hobbies: textFieldFourTwoSixZeroNineEightTwoValue,
          othersport: textFieldFourTwoSixZeroNineEightThreeValue,
          picture: textFieldFourTwoSixOneOneOneNineFiveValue,
        },
      },
    });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/person" });
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
      {...getOverrideProps(overrides, "UICreateSport")}
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
            onClick={() => {
              iconOnClick();
            }}
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
              onClick={() => {
                vectorOnClick();
              }}
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
            children="Create Sports Profile"
            {...getOverrideProps(overrides, "Create Sports Profile")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4260953")}
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
            value={textFieldFourTwoSixZeroNineFiveFiveValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineFiveFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260955")}
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
            value={textFieldFourTwoSixZeroNineFiveSixValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineFiveSixValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260956")}
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
            value={textFieldFourTwoSixZeroNineFiveSevenValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineFiveSevenValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260957")}
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
            value={textFieldFourTwoSixZeroNineFiveEightValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineFiveEightValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260958")}
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
            value={textFieldFourTwoSixZeroNineFiveNineValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineFiveNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260959")}
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
            value={textFieldFourTwoSixZeroNineSixZeroValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixZeroValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260960")}
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
            value={textFieldFourTwoSixZeroNineSixOneValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixOneValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260961")}
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
            value={textFieldFourTwoSixZeroNineSixTwoValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260962")}
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
            value={textFieldFourTwoSixZeroNineSixThreeValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixThreeValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260963")}
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
            value={textFieldFourTwoSixZeroNineSixFourValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixFourValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260964")}
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
            value={textFieldFourTwoSixZeroNineSixFiveValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260965")}
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
            value={textFieldFourTwoSixZeroNineSixSixValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixSixValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260966")}
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
            value={textFieldFourTwoSixZeroNineSixSevenValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixSevenValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260967")}
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
            value={textFieldFourTwoSixZeroNineSixEightValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixEightValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260968")}
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
            value={textFieldFourTwoSixZeroNineSixNineValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSixNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260969")}
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
            value={textFieldFourTwoSixZeroNineSevenZeroValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenZeroValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260970")}
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
            value={textFieldFourTwoSixZeroNineSevenOneValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenOneValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260971")}
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
            value={textFieldFourTwoSixZeroNineSevenTwoValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260972")}
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
            value={textFieldFourTwoSixZeroNineSevenThreeValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenThreeValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260973")}
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
            value={textFieldFourTwoSixZeroNineSevenFourValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenFourValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260974")}
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
            value={textFieldFourTwoSixZeroNineSevenFiveValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260975")}
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
            value={textFieldFourTwoSixZeroNineSevenSixValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenSixValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260976")}
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
            value={textFieldFourTwoSixZeroNineSevenSevenValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenSevenValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260977")}
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
            value={textFieldFourTwoSixZeroNineSevenEightValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenEightValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260978")}
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
            value={textFieldFourTwoSixZeroNineSevenNineValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineSevenNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260979")}
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
            value={textFieldFourTwoSixZeroNineEightZeroValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightZeroValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260980")}
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
            value={textFieldFourTwoSixZeroNineEightOneValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightOneValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260981")}
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
            value={textFieldFourTwoSixZeroNineEightTwoValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260982")}
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
            value={textFieldFourTwoSixOneOneOneNineFiveValue}
            onChange={(event) => {
              setTextFieldFourTwoSixOneOneOneNineFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField42611195")}
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
            value={textFieldFourTwoSixZeroNineEightThreeValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightThreeValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260983")}
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
            value={textFieldFourTwoSixZeroNineEightFourValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightFourValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260984")}
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
            value={textFieldFourTwoSixZeroNineEightFiveValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260985")}
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
            value={textFieldFourTwoSixZeroNineEightSixValue}
            onChange={(event) => {
              setTextFieldFourTwoSixZeroNineEightSixValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4260986")}
          ></TextField>
        </View>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4260987")}
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
            children="Create"
            onClick={() => {
              buttonOnClick();
            }}
            onMouseUp={() => {
              buttonOnMouseUp();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
      </Flex>
    </View>
  );
}
