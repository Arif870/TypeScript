// Union and Intersection type

type JuniorDevsType = {
  Name: String;
  Level: Number;
};

type MidSeniorType = JuniorDevsType & {
  Name: String;
  Level: Number;
  CompletedProject: Number;
};

const developer: MidSeniorType = {
  Name: "Arif uz zaman",
  Level: 3,
  CompletedProject: 300,
};
