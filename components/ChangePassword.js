import React from "react";
import FormButton from "./FormButton";
import LabeledInput from "./LabeledInput";

function ChangePassword() {
  return (
    <div>
      <form>
        <div className="form-grid">
          <LabeledInput
            label="Old Password"
            type="text"
            placeholder="Member1"
            id="old-password"
          />
          <LabeledInput
            error={true}
            label="New Password"
            type="text"
            placeholder="2"
            id="new-password"
          />

          <LabeledInput
            label="Confirm Password"
            type="text"
            placeholder="2"
            id="confirm-pasword"
          />

          <div className="btnWrapper">
            <FormButton title="Change" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
