/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSport } from "../graphql/queries";
import { updateSport } from "../graphql/mutations";
const client = generateClient();
export default function SportUpdateForm(props) {
  const {
    id: idProp,
    sport: sportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    grad: "",
    height: "",
    weight: "",
    email: "",
    phone: "",
    gpa: "",
    rank: "",
    sat: "",
    act: "",
    aps: "",
    coachname: "",
    coachphone: "",
    coachemail: "",
    parentname: "",
    parentphone: "",
    parentemail: "",
    address: "",
    sport: "",
    team: "",
    position: "",
    jersey: "",
    stat1: "",
    stat2: "",
    stat3: "",
    stat4: "",
    stat5: "",
    stat6: "",
    volunteer: "",
    hobbies: "",
    othersport: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [grad, setGrad] = React.useState(initialValues.grad);
  const [height, setHeight] = React.useState(initialValues.height);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [gpa, setGpa] = React.useState(initialValues.gpa);
  const [rank, setRank] = React.useState(initialValues.rank);
  const [sat, setSat] = React.useState(initialValues.sat);
  const [act, setAct] = React.useState(initialValues.act);
  const [aps, setAps] = React.useState(initialValues.aps);
  const [coachname, setCoachname] = React.useState(initialValues.coachname);
  const [coachphone, setCoachphone] = React.useState(initialValues.coachphone);
  const [coachemail, setCoachemail] = React.useState(initialValues.coachemail);
  const [parentname, setParentname] = React.useState(initialValues.parentname);
  const [parentphone, setParentphone] = React.useState(
    initialValues.parentphone
  );
  const [parentemail, setParentemail] = React.useState(
    initialValues.parentemail
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [sport, setSport] = React.useState(initialValues.sport);
  const [team, setTeam] = React.useState(initialValues.team);
  const [position, setPosition] = React.useState(initialValues.position);
  const [jersey, setJersey] = React.useState(initialValues.jersey);
  const [stat1, setStat1] = React.useState(initialValues.stat1);
  const [stat2, setStat2] = React.useState(initialValues.stat2);
  const [stat3, setStat3] = React.useState(initialValues.stat3);
  const [stat4, setStat4] = React.useState(initialValues.stat4);
  const [stat5, setStat5] = React.useState(initialValues.stat5);
  const [stat6, setStat6] = React.useState(initialValues.stat6);
  const [volunteer, setVolunteer] = React.useState(initialValues.volunteer);
  const [hobbies, setHobbies] = React.useState(initialValues.hobbies);
  const [othersport, setOthersport] = React.useState(initialValues.othersport);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sportRecord
      ? { ...initialValues, ...sportRecord }
      : initialValues;
    setName(cleanValues.name);
    setGrad(cleanValues.grad);
    setHeight(cleanValues.height);
    setWeight(cleanValues.weight);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setGpa(cleanValues.gpa);
    setRank(cleanValues.rank);
    setSat(cleanValues.sat);
    setAct(cleanValues.act);
    setAps(cleanValues.aps);
    setCoachname(cleanValues.coachname);
    setCoachphone(cleanValues.coachphone);
    setCoachemail(cleanValues.coachemail);
    setParentname(cleanValues.parentname);
    setParentphone(cleanValues.parentphone);
    setParentemail(cleanValues.parentemail);
    setAddress(cleanValues.address);
    setSport(cleanValues.sport);
    setTeam(cleanValues.team);
    setPosition(cleanValues.position);
    setJersey(cleanValues.jersey);
    setStat1(cleanValues.stat1);
    setStat2(cleanValues.stat2);
    setStat3(cleanValues.stat3);
    setStat4(cleanValues.stat4);
    setStat5(cleanValues.stat5);
    setStat6(cleanValues.stat6);
    setVolunteer(cleanValues.volunteer);
    setHobbies(cleanValues.hobbies);
    setOthersport(cleanValues.othersport);
    setErrors({});
  };
  const [sportRecord, setSportRecord] = React.useState(sportModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSport.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSport
        : sportModelProp;
      setSportRecord(record);
    };
    queryData();
  }, [idProp, sportModelProp]);
  React.useEffect(resetStateValues, [sportRecord]);
  const validations = {
    name: [],
    grad: [],
    height: [],
    weight: [],
    email: [],
    phone: [],
    gpa: [],
    rank: [],
    sat: [],
    act: [],
    aps: [],
    coachname: [],
    coachphone: [],
    coachemail: [],
    parentname: [],
    parentphone: [],
    parentemail: [],
    address: [],
    sport: [],
    team: [],
    position: [],
    jersey: [],
    stat1: [],
    stat2: [],
    stat3: [],
    stat4: [],
    stat5: [],
    stat6: [],
    volunteer: [],
    hobbies: [],
    othersport: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          grad: grad ?? null,
          height: height ?? null,
          weight: weight ?? null,
          email: email ?? null,
          phone: phone ?? null,
          gpa: gpa ?? null,
          rank: rank ?? null,
          sat: sat ?? null,
          act: act ?? null,
          aps: aps ?? null,
          coachname: coachname ?? null,
          coachphone: coachphone ?? null,
          coachemail: coachemail ?? null,
          parentname: parentname ?? null,
          parentphone: parentphone ?? null,
          parentemail: parentemail ?? null,
          address: address ?? null,
          sport: sport ?? null,
          team: team ?? null,
          position: position ?? null,
          jersey: jersey ?? null,
          stat1: stat1 ?? null,
          stat2: stat2 ?? null,
          stat3: stat3 ?? null,
          stat4: stat4 ?? null,
          stat5: stat5 ?? null,
          stat6: stat6 ?? null,
          volunteer: volunteer ?? null,
          hobbies: hobbies ?? null,
          othersport: othersport ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSport.replaceAll("__typename", ""),
            variables: {
              input: {
                id: sportRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Grad"
        isRequired={false}
        isReadOnly={false}
        value={grad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad: value,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.grad ?? value;
          }
          if (errors.grad?.hasError) {
            runValidationTasks("grad", value);
          }
          setGrad(value);
        }}
        onBlur={() => runValidationTasks("grad", grad)}
        errorMessage={errors.grad?.errorMessage}
        hasError={errors.grad?.hasError}
        {...getOverrideProps(overrides, "grad")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        value={height}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height: value,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        value={weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight: value,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email: value,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone: value,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Gpa"
        isRequired={false}
        isReadOnly={false}
        value={gpa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa: value,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.gpa ?? value;
          }
          if (errors.gpa?.hasError) {
            runValidationTasks("gpa", value);
          }
          setGpa(value);
        }}
        onBlur={() => runValidationTasks("gpa", gpa)}
        errorMessage={errors.gpa?.errorMessage}
        hasError={errors.gpa?.hasError}
        {...getOverrideProps(overrides, "gpa")}
      ></TextField>
      <TextField
        label="Rank"
        isRequired={false}
        isReadOnly={false}
        value={rank}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank: value,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.rank ?? value;
          }
          if (errors.rank?.hasError) {
            runValidationTasks("rank", value);
          }
          setRank(value);
        }}
        onBlur={() => runValidationTasks("rank", rank)}
        errorMessage={errors.rank?.errorMessage}
        hasError={errors.rank?.hasError}
        {...getOverrideProps(overrides, "rank")}
      ></TextField>
      <TextField
        label="Sat"
        isRequired={false}
        isReadOnly={false}
        value={sat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat: value,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.sat ?? value;
          }
          if (errors.sat?.hasError) {
            runValidationTasks("sat", value);
          }
          setSat(value);
        }}
        onBlur={() => runValidationTasks("sat", sat)}
        errorMessage={errors.sat?.errorMessage}
        hasError={errors.sat?.hasError}
        {...getOverrideProps(overrides, "sat")}
      ></TextField>
      <TextField
        label="Act"
        isRequired={false}
        isReadOnly={false}
        value={act}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act: value,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.act ?? value;
          }
          if (errors.act?.hasError) {
            runValidationTasks("act", value);
          }
          setAct(value);
        }}
        onBlur={() => runValidationTasks("act", act)}
        errorMessage={errors.act?.errorMessage}
        hasError={errors.act?.hasError}
        {...getOverrideProps(overrides, "act")}
      ></TextField>
      <TextField
        label="Aps"
        isRequired={false}
        isReadOnly={false}
        value={aps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps: value,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.aps ?? value;
          }
          if (errors.aps?.hasError) {
            runValidationTasks("aps", value);
          }
          setAps(value);
        }}
        onBlur={() => runValidationTasks("aps", aps)}
        errorMessage={errors.aps?.errorMessage}
        hasError={errors.aps?.hasError}
        {...getOverrideProps(overrides, "aps")}
      ></TextField>
      <TextField
        label="Coachname"
        isRequired={false}
        isReadOnly={false}
        value={coachname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname: value,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.coachname ?? value;
          }
          if (errors.coachname?.hasError) {
            runValidationTasks("coachname", value);
          }
          setCoachname(value);
        }}
        onBlur={() => runValidationTasks("coachname", coachname)}
        errorMessage={errors.coachname?.errorMessage}
        hasError={errors.coachname?.hasError}
        {...getOverrideProps(overrides, "coachname")}
      ></TextField>
      <TextField
        label="Coachphone"
        isRequired={false}
        isReadOnly={false}
        value={coachphone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone: value,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.coachphone ?? value;
          }
          if (errors.coachphone?.hasError) {
            runValidationTasks("coachphone", value);
          }
          setCoachphone(value);
        }}
        onBlur={() => runValidationTasks("coachphone", coachphone)}
        errorMessage={errors.coachphone?.errorMessage}
        hasError={errors.coachphone?.hasError}
        {...getOverrideProps(overrides, "coachphone")}
      ></TextField>
      <TextField
        label="Coachemail"
        isRequired={false}
        isReadOnly={false}
        value={coachemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail: value,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.coachemail ?? value;
          }
          if (errors.coachemail?.hasError) {
            runValidationTasks("coachemail", value);
          }
          setCoachemail(value);
        }}
        onBlur={() => runValidationTasks("coachemail", coachemail)}
        errorMessage={errors.coachemail?.errorMessage}
        hasError={errors.coachemail?.hasError}
        {...getOverrideProps(overrides, "coachemail")}
      ></TextField>
      <TextField
        label="Parentname"
        isRequired={false}
        isReadOnly={false}
        value={parentname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname: value,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.parentname ?? value;
          }
          if (errors.parentname?.hasError) {
            runValidationTasks("parentname", value);
          }
          setParentname(value);
        }}
        onBlur={() => runValidationTasks("parentname", parentname)}
        errorMessage={errors.parentname?.errorMessage}
        hasError={errors.parentname?.hasError}
        {...getOverrideProps(overrides, "parentname")}
      ></TextField>
      <TextField
        label="Parentphone"
        isRequired={false}
        isReadOnly={false}
        value={parentphone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone: value,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.parentphone ?? value;
          }
          if (errors.parentphone?.hasError) {
            runValidationTasks("parentphone", value);
          }
          setParentphone(value);
        }}
        onBlur={() => runValidationTasks("parentphone", parentphone)}
        errorMessage={errors.parentphone?.errorMessage}
        hasError={errors.parentphone?.hasError}
        {...getOverrideProps(overrides, "parentphone")}
      ></TextField>
      <TextField
        label="Parentemail"
        isRequired={false}
        isReadOnly={false}
        value={parentemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail: value,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.parentemail ?? value;
          }
          if (errors.parentemail?.hasError) {
            runValidationTasks("parentemail", value);
          }
          setParentemail(value);
        }}
        onBlur={() => runValidationTasks("parentemail", parentemail)}
        errorMessage={errors.parentemail?.errorMessage}
        hasError={errors.parentemail?.hasError}
        {...getOverrideProps(overrides, "parentemail")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address: value,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Sport"
        isRequired={false}
        isReadOnly={false}
        value={sport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport: value,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.sport ?? value;
          }
          if (errors.sport?.hasError) {
            runValidationTasks("sport", value);
          }
          setSport(value);
        }}
        onBlur={() => runValidationTasks("sport", sport)}
        errorMessage={errors.sport?.errorMessage}
        hasError={errors.sport?.hasError}
        {...getOverrideProps(overrides, "sport")}
      ></TextField>
      <TextField
        label="Team"
        isRequired={false}
        isReadOnly={false}
        value={team}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team: value,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.team ?? value;
          }
          if (errors.team?.hasError) {
            runValidationTasks("team", value);
          }
          setTeam(value);
        }}
        onBlur={() => runValidationTasks("team", team)}
        errorMessage={errors.team?.errorMessage}
        hasError={errors.team?.hasError}
        {...getOverrideProps(overrides, "team")}
      ></TextField>
      <TextField
        label="Position"
        isRequired={false}
        isReadOnly={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position: value,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <TextField
        label="Jersey"
        isRequired={false}
        isReadOnly={false}
        value={jersey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey: value,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.jersey ?? value;
          }
          if (errors.jersey?.hasError) {
            runValidationTasks("jersey", value);
          }
          setJersey(value);
        }}
        onBlur={() => runValidationTasks("jersey", jersey)}
        errorMessage={errors.jersey?.errorMessage}
        hasError={errors.jersey?.hasError}
        {...getOverrideProps(overrides, "jersey")}
      ></TextField>
      <TextField
        label="Stat1"
        isRequired={false}
        isReadOnly={false}
        value={stat1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1: value,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.stat1 ?? value;
          }
          if (errors.stat1?.hasError) {
            runValidationTasks("stat1", value);
          }
          setStat1(value);
        }}
        onBlur={() => runValidationTasks("stat1", stat1)}
        errorMessage={errors.stat1?.errorMessage}
        hasError={errors.stat1?.hasError}
        {...getOverrideProps(overrides, "stat1")}
      ></TextField>
      <TextField
        label="Stat2"
        isRequired={false}
        isReadOnly={false}
        value={stat2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2: value,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.stat2 ?? value;
          }
          if (errors.stat2?.hasError) {
            runValidationTasks("stat2", value);
          }
          setStat2(value);
        }}
        onBlur={() => runValidationTasks("stat2", stat2)}
        errorMessage={errors.stat2?.errorMessage}
        hasError={errors.stat2?.hasError}
        {...getOverrideProps(overrides, "stat2")}
      ></TextField>
      <TextField
        label="Stat3"
        isRequired={false}
        isReadOnly={false}
        value={stat3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3: value,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.stat3 ?? value;
          }
          if (errors.stat3?.hasError) {
            runValidationTasks("stat3", value);
          }
          setStat3(value);
        }}
        onBlur={() => runValidationTasks("stat3", stat3)}
        errorMessage={errors.stat3?.errorMessage}
        hasError={errors.stat3?.hasError}
        {...getOverrideProps(overrides, "stat3")}
      ></TextField>
      <TextField
        label="Stat4"
        isRequired={false}
        isReadOnly={false}
        value={stat4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4: value,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.stat4 ?? value;
          }
          if (errors.stat4?.hasError) {
            runValidationTasks("stat4", value);
          }
          setStat4(value);
        }}
        onBlur={() => runValidationTasks("stat4", stat4)}
        errorMessage={errors.stat4?.errorMessage}
        hasError={errors.stat4?.hasError}
        {...getOverrideProps(overrides, "stat4")}
      ></TextField>
      <TextField
        label="Stat5"
        isRequired={false}
        isReadOnly={false}
        value={stat5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5: value,
              stat6,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.stat5 ?? value;
          }
          if (errors.stat5?.hasError) {
            runValidationTasks("stat5", value);
          }
          setStat5(value);
        }}
        onBlur={() => runValidationTasks("stat5", stat5)}
        errorMessage={errors.stat5?.errorMessage}
        hasError={errors.stat5?.hasError}
        {...getOverrideProps(overrides, "stat5")}
      ></TextField>
      <TextField
        label="Stat6"
        isRequired={false}
        isReadOnly={false}
        value={stat6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6: value,
              volunteer,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.stat6 ?? value;
          }
          if (errors.stat6?.hasError) {
            runValidationTasks("stat6", value);
          }
          setStat6(value);
        }}
        onBlur={() => runValidationTasks("stat6", stat6)}
        errorMessage={errors.stat6?.errorMessage}
        hasError={errors.stat6?.hasError}
        {...getOverrideProps(overrides, "stat6")}
      ></TextField>
      <TextField
        label="Volunteer"
        isRequired={false}
        isReadOnly={false}
        value={volunteer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer: value,
              hobbies,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.volunteer ?? value;
          }
          if (errors.volunteer?.hasError) {
            runValidationTasks("volunteer", value);
          }
          setVolunteer(value);
        }}
        onBlur={() => runValidationTasks("volunteer", volunteer)}
        errorMessage={errors.volunteer?.errorMessage}
        hasError={errors.volunteer?.hasError}
        {...getOverrideProps(overrides, "volunteer")}
      ></TextField>
      <TextField
        label="Hobbies"
        isRequired={false}
        isReadOnly={false}
        value={hobbies}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies: value,
              othersport,
            };
            const result = onChange(modelFields);
            value = result?.hobbies ?? value;
          }
          if (errors.hobbies?.hasError) {
            runValidationTasks("hobbies", value);
          }
          setHobbies(value);
        }}
        onBlur={() => runValidationTasks("hobbies", hobbies)}
        errorMessage={errors.hobbies?.errorMessage}
        hasError={errors.hobbies?.hasError}
        {...getOverrideProps(overrides, "hobbies")}
      ></TextField>
      <TextField
        label="Othersport"
        isRequired={false}
        isReadOnly={false}
        value={othersport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              grad,
              height,
              weight,
              email,
              phone,
              gpa,
              rank,
              sat,
              act,
              aps,
              coachname,
              coachphone,
              coachemail,
              parentname,
              parentphone,
              parentemail,
              address,
              sport,
              team,
              position,
              jersey,
              stat1,
              stat2,
              stat3,
              stat4,
              stat5,
              stat6,
              volunteer,
              hobbies,
              othersport: value,
            };
            const result = onChange(modelFields);
            value = result?.othersport ?? value;
          }
          if (errors.othersport?.hasError) {
            runValidationTasks("othersport", value);
          }
          setOthersport(value);
        }}
        onBlur={() => runValidationTasks("othersport", othersport)}
        errorMessage={errors.othersport?.errorMessage}
        hasError={errors.othersport?.hasError}
        {...getOverrideProps(overrides, "othersport")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sportModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sportModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
