import { RowData } from "./RowData";

function sortDataBy(key: keyof RowData, order: "asc" | "desc", data: RowData[]) {
  return data.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];
    if (aValue < bValue) {
      return order === "asc" ? -1 : 1;
    } else if (aValue > bValue) {
      return order === "asc" ? 1 : -1;
    } else {
      // Group rows with the same transaction ID together
      if (key === "transactionId") {
        const aId = a.transactionId;
        const bId = b.transactionId;
        if (aId < bId) {
          return order === "asc" ? -1 : 1;
        } else if (aId > bId) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      } else {
        // If the values are equal and the sort key is not "transactionId", use the transaction ID to break ties
        const aId = a.transactionId;
        const bId = b.transactionId;
        if (aId === bId) {
          return 0;
        } else {
          const aIndex = data.findIndex((d) => d.transactionId === aId);
          const bIndex = data.findIndex((d) => d.transactionId === bId);
          return aIndex - bIndex;
        }
      }
    }
  });
}

export { sortDataBy };