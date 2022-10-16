import API from "./baseApi";
const BASE_RESOURCE_NAME = "beneficiaries";
const beneficiariesService = {
  getAllBeneficiaries: (pageSize, pageNumber, textFilter, genderFilter, cityFilter) => {
    return API.getAllResources(
      BASE_RESOURCE_NAME,
      `pageSize=${pageSize}&pageNumber=${pageNumber}&fiterText=${textFilter}&filterGender=${genderFilter}&filterCity=${cityFilter}`
    );
  },
  getBeneficiaryById: (beneficiaryId) => {
    return API.getResourceById(BASE_RESOURCE_NAME, beneficiaryId, localStorage.getItem("token"));
  },
};
/*var mockData = {
  results: [
    {
      id: "1",
      helping_period: "6 meseci",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-14",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Marko",
      last_name: "Puzovic",
      care_type: "Potrebna pomoć ZA VOŽNJU NA PREGLEDE I OBAVLJANJE POSLOVA NABAVKE",
      gender: "male",
    },
    {
      id: "2",
      helping_period: "1 godina",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-9",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Petar",
      last_name: "Petrovic",
      care_type: "Potrebna pomoć ZA VOŽNJU NA PREGLEDE I OBAVLJANJE POSLOVA NABAVKE",
      gender: "female",
    },
    {
      id: "3",
      helping_period: "6 meseci",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-2",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Zoran",
      last_name: "Mihajlovic",
      care_type: "Potrebna SPECIJALNA NEGA",
      gender: "male",
    },
    {
      id: "4",
      helping_period: "6 meseci",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-10-1",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Stefan",
      last_name: "Peric",
      care_type: "Potrebana SOCIJALIZACIJA I EMOTIVNA PODRŠKA",
      gender: "male",
    },
    {
      id: "5",
      helping_period: "2 meseca",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
      created: "2022-09-14",
      city: "Novi Sad",
      description:
        "Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.",
      first_name: "Luka",
      last_name: "Lukic",
      care_type: "Potrebana SOCIJALIZACIJA I EMOTIVNA PODRŠKA",
      gender: "male",
    },
  ],
  pageNumber: 1,
  pageSize: 20,
  total: 200,
};*/
export default beneficiariesService;
