import React from "react";
import FormButton from "./FormButton";
import LabeledInput from "./LabeledInput";

function AccountSettingForm() {
  return (
    <form>
      <div className="form-grid">
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
          error={true}
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

        <div className="btnWrapper">
          <FormButton title="SAVE" />
        </div>
      </div>
    </form>
  );
}

export default AccountSettingForm;
