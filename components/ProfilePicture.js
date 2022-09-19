import React, { useEffect, useState } from "react";
import FormButton from "./FormButton";
import styles from "scss/components/ProfilePicture.module.scss";

function ProfilePicture() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <div>
        <div className={styles.imageUploader}>
          <label htmlFor="file-upload" className={styles.imagesUpload}>
            {selectedFile && <img src={preview} alt="preiview" />}
            <input
              type="file"
              id="file-upload"
              style={{ opacity: 0 }}
              onChange={onSelectFile}
            />
          </label>
          <label
            htmlFor="file-upload"
            className="form-button text-center fs-16px yellow weight-6 pointer"
          >
            Upload Image
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
