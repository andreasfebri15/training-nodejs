import fs from "fs";

function formatResponse(status: number, message: string, data: any = null) {
  return { status, message, data };
}

function logHistory(
  operation: string,
  valueA: number,
  valueB: number,
  result: number
) {
  const history = {
    operation,
    valueA,
    valueB,
    result,
    date: new Date(),
  };
  const historyFile = "history.json";

  if (!fs.existsSync(historyFile)) {
    fs.writeFileSync(historyFile, "[]");
  }
  const data = JSON.parse(fs.readFileSync(historyFile, "utf-8"));
  data.push(history);
  fs.writeFileSync(historyFile, JSON.stringify(data));
}

function readJsonFile(filename: string): any[] {
  try {
    const data = fs.readFileSync(filename, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading JSON file: at ${filename}`, error);
    return [];
  }
}

function writeJsonFile(filename: string, data: any) {
  try {
    fs.writeFileSync(filename, JSON.stringify(data));
  } catch (error) {
    console.error(`Error reading JSON file: at ${filename}`, error);
  }
}

export { formatResponse, logHistory, readJsonFile, writeJsonFile };
