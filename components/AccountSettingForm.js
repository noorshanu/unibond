import React from "react";
import styles from "scss/components/AccountSettingForm.module.scss";
import FormButton from "./FormButton";
import LabeledInput from "./LabeledInput";

function AccountSettingForm() {
  return (
    <form>
      <div className={styles.cards}>
        <LabeledInput
          label="First Name"
          type="text"
          placeholder="Member1"
          id="first name"
        />
        <LabeledInput
          label="Last Name"
          type="text"
          placeholder="2"
          id="last name"
        />
        <LabeledInput
          label="Email"
          type="text"
          placeholder="unibond12@gmail.com"
          id="Email"
        />
        <LabeledInput
          label="Username"
          type="text"
          placeholder="Member1"
          id="Username"
        />
        <LabeledInput
          label="Phone Number"
          type="text"
          placeholder="7990644522"
          id="Phone"
        />

        <div className={styles.btnWrapper}>
          <FormButton title="SAVE" />
        </div>
      </div>
    </form>
  );
}

export default AccountSettingForm;
