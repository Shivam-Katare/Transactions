type RowData = {
  transactionId: string;
  createdAt: number;
  destinationAmount: string;
  destinationCurrency: string;
  originAmount: string;
  originCurrency: string;
  destinationUserId: string;
  originUserId: string;
  type: string;
  status: string;
};

export type { RowData };