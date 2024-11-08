const SMathOperation = (
  numA: number,
  numB: number,
  operation: string
): number | null => {
  switch (operation) {
    case "add":
      return numA + numB;
    case "substract":
      return numA - numB;
    case "multiply":
      return numA * numB;
    case "divide":
      return numB !== 0 ? numA / numB : numA / numB;
    default:
      throw new Error("Invalid operation");
  }
};

export default SMathOperation;

export const availableOperations = ["add", "subtract", "multiply", "divide"];

export function getAvailableOperations() {
  return availableOperations;
}
