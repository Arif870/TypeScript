function Greet(...Greet: string[]): void {
  const hello = Greet.map((greeting: string) => `Hello -> ${greeting}`);
  console.log(hello);
}

Greet("A", "B", "C", "D", "E");
