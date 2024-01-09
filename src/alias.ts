// Type Alias and Optional type

type userDeatailType = {
  name: String;
  job: String;
  age: Number;
  isMarried?: boolean;
};

const user1: userDeatailType = {
  name: "Arif uz zaman",
  job: "Web developer",
  age: 27,
  isMarried: true,
};

const user2: userDeatailType = {
  name: "Sumaiya",
  job: "Web developer",
  age: 35,
};

// String alias

type JobType = String;

const job: JobType = "IT Executive";

// Number type alias

type NumberType = Number;

const age: NumberType = 20;
