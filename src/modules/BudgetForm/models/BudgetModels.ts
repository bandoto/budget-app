export interface ITransaction {
  id: string;
  value: number;
  text: string;
  type: "add" | "remove";
  date: string;
}
