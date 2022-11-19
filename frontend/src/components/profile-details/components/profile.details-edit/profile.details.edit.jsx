import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { Input, TextArea, LongButton } from "shared-components";
import CitiesService from "pages/api/countriesService";
import { CaregiversService } from "pages/api/caregiversService";
import { BeneficiariesService } from "pages/api/beneficiariesService";

import styles from "./profile.details.edit.module.scss";

export const ProfileDetailsEdit = ({ profile, editList, userType }) => {
  const router = useRouter();
  const [cityOptions, setCityOptions] = useState({});
  const [editedData, setEditedData] = useState({});

  async function prepareCityOptions() {
    const serbianCities = await CitiesService.getAllSerbianCities();
    const serbianCityOptions = serbianCities.reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
    setCityOptions(serbianCityOptions);
  }

  const handleValueChange = (value, field) => {
    setEditedData({ ...editedData, [field]: value });
  };

  async function editProfile() {
    if (userType === "caregiver") {
      await CaregiversService.editCaregiverById(profile.id, editedData).then(() => {
        router.reload();
      });
    }
    await BeneficiariesService.editBeneficiaryById(profile.id, editedData).then(() => {
      router.reload();
    });
  }

  useEffect(() => {
    prepareCityOptions();
  }, [profile, userType]);

  console.log("Profile:", profile);

  const renderInput = (item) => {
    if (item.title === "OPSTE INFORMACIJE") {
      return (
        <div>
          <TextArea
            defaultValue={profile.description}
            valueChangedHandler={(e) => handleValueChange(e, "description")}
          />
        </div>
      );
    }
    if (item.title === "DRUŠTVENE MREŽE") {
      return item.fields.map((element, index) => {
        return (
          <div key={index}>
            <Input
              id={element.fieldName}
              type={item.type}
              name={element.fieldName}
              placeholder={element.placeholder}
              inputValue={profile[element.fieldName]}
              valueChangedHandler={(e) => handleValueChange(e, element.fieldName)}
              isValidInput={true}
            />
          </div>
        );
      });
    }
    return (
      <div className={styles.p1}>
        <Input
          id={item.fieldName}
          type={item.type}
          name={item.fieldName}
          inputValue={profile.user[item.fieldName] ?? profile[item.fieldName]}
          valueChangedHandler={(e) => handleValueChange(e, item.fieldName)}
          isValidInput={true}
        />
      </div>
    );
  };

  return (
    <div className={styles.userDetailsWrapper}>
      <div className={styles.userDetailsSection}>
        <div className={styles.imageSection}>
          <img
            className={[styles.roundedImage, styles.editEnabled].join(" ")}
            src={profile.image ?? "/images/profile.image.placeholder.svg"}
            alt="profile image"
          />
          <div className={styles.editImageOverlay}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.editImgIcon} />
          </div>
          <div className={styles.profileName}>{`${profile.user.first_name} ${profile.user.last_name}`}</div>
          <div className={`${styles.profileLocation} ${styles.p2}`}>
            <Input
              className={styles.editCityInput}
              id={"city"}
              type={"dropdown"}
              name={"city"}
              options={cityOptions}
              inputValue={profile.city}
              valueChangedHandler={(e) => handleValueChange(e, "city")}
              isValidInput={true}
            />
          </div>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.userDetails}>
            {editList.map((item, index) => {
              return (
                <div key={index} className={[styles.elementInfo, styles[item.styleClass]].join(" ")}>
                  <h5 className={styles.h5}>
                    {item.title}
                    <FontAwesomeIcon icon={faPenToSquare} className={styles.editIcon} />
                  </h5>
                  {renderInput(item)}
                </div>
              );
            })}
          </div>
          <LongButton value="Sačuvaj izmene" type="filled" onClick={editProfile} />
        </div>
      </div>
    </div>
  );
};
