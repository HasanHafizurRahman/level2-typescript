const myInfo: myInfoType = {
  name: "Hasan Hafizur Rahman",
  age: 30,
  revenue: 200000000,
};

type myInfoType = {
  name: string;
  age: number;
  revenue: number;
};

const addMeFounderClub = <T extends myInfoType>(myInfo: T) => {
  const company = "Dev Cast";
  const newData = { ...myInfo, company };
  return newData;
};

const invitation = addMeFounderClub<myInfoType>(myInfo);
