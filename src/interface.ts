// Interface should use only for object

interface IUser {
  name: string;
  age: number;
}

// Extended interface
interface IExtended extends IUser {
  isTrue: boolean;
}

const userr: IExtended = {
  name: "Arif",
  age: 20,
  isTrue: true,
};
