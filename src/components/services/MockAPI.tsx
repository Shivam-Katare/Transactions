export type Transaction = {
  transactionId: string;
  createdAt: number;
  destinationAmount: {
    transactionCurrency: string;
    transactionAmount: number;
  };
  destinationCurrency: {
    transactionCurrency: string;
    transactionAmount: number;
  };
  originAmount: {
    transactionCurrency: string;
    transactionAmount: number;
  };
  originCurrency: {
    transactionCurrency: string;
    transactionAmount: number;
  };
  destinationUserId: string;
  originUserId: string;
  type: string;
  status: string;
};

const data: Transaction[] = [
  {
    transactionId: "v1-296193",
    createdAt: 1646041508000,
    destinationAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 2000,
    },
    destinationCurrency: {
      transactionCurrency: "TRY",
      transactionAmount: 2000,
    },
    originAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 2000,
    },
    originCurrency: {
      transactionCurrency: "TRY",
      transactionAmount: 2000,
    },
    destinationUserId: "69887",
    originUserId: "69887",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "testing-8",
    createdAt: 1657698943000,
    destinationAmount: {
      transactionCurrency: "INR",
      transactionAmount: 500,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 500,
    },
    originAmount: {
      transactionCurrency: "-",
      transactionAmount: 500,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 2000,
    },
    destinationUserId: "nikolai",
    originUserId: "-",
    type: "-",
    status: "FLAG",
  },
  {
    transactionId: "123123123123123",
    createdAt: 1657698930000,
    destinationAmount: {
      transactionCurrency: "INR",
      transactionAmount: 500,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 500,
    },
    originAmount: {
      transactionCurrency: "-",
      transactionAmount: 500,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 2000,
    },
    destinationUserId: "nikolai",
    originUserId: "-",
    type: "-",
    status: "FLAG",
  },
  {
    transactionId: "v1-45343",
    createdAt: 1645144993000,
    destinationAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 500,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 500,
    },
    originAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 500,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 500,
    },
    destinationUserId: "65895",
    originUserId: "65895",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "BTC",
    createdAt: 1645153681000,
    destinationAmount: {
      transactionCurrency: "BTC",
      transactionAmount: 0,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "BTC",
      transactionAmount: 0,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "75138",
    originUserId: "75138",
    type: "CRYPTO_WITHDRAW",
    status: "ALLOW",
  },
  {
    transactionId: "ETH",
    createdAt: 1667701205000,
    destinationAmount: {
      transactionCurrency: "ETH",
      transactionAmount: 1.23,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "ETH",
      transactionAmount: 1.23,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "91827",
    originUserId: "91827",
    type: "CRYPTO_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "ETH",
    createdAt: 1647564873000,
    destinationAmount: {
      transactionCurrency: "ETH",
      transactionAmount: 0.05,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 400,
    },
    originAmount: {
      transactionCurrency: "EUR",
      transactionAmount: 300,
    },
    originCurrency: {
      transactionCurrency: "TRY",
      transactionAmount: 2500,
    },
    destinationUserId: "25137",
    originUserId: "12946",
    type: "FIAT_WIDRAWAL",
    status: "Flag",
  },
  {
    transactionId: "LTC",
    createdAt: 1652456902000,
    destinationAmount: {
      transactionCurrency: "LTC",
      transactionAmount: 0.025,
    },
    destinationCurrency: {
      transactionCurrency: "USA",
      transactionAmount: 2000,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 1500,
    },
    originCurrency: {
      transactionCurrency: "INR",
      transactionAmount: 110000,
    },
    destinationUserId: "17843",
    originUserId: "20958",
    type: "CRYPTO_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "BTC",
    createdAt: 1657855321000,
    destinationAmount: {
      transactionCurrency: "BTC",
      transactionAmount: 0.01,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 8000,
    },
    originAmount: {
      transactionCurrency: "EUR",
      transactionAmount: 7500,
    },
    originCurrency: {
      transactionCurrency: "TRY",
      transactionAmount: 62500,
    },
    destinationUserId: "12097",
    originUserId: "93275",
    type: "FIAT_DEPOSIT",
    status: "Flag",
  },
  {
    transactionId: "T_123456",
    createdAt: 1653687542000,
    destinationAmount: {
      transactionCurrency: "USD",
      transactionAmount: 500.25,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 425.00,
    },
    originAmount: {
      transactionCurrency: "EUR",
      transactionAmount: 390.50,
    },
    originCurrency: {
      transactionCurrency: "INR",
      transactionAmount: 28755.00,
    },
    destinationUserId: "224578",
    originUserId: "398576",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "T_234567",
    createdAt: 1662471258000,
    destinationAmount: {
      transactionCurrency: "EUR",
      transactionAmount: 1250.00,
    },
    destinationCurrency: {
      transactionCurrency: "USD",
      transactionAmount: 1500.75,
    },
    originAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 765.00,
    },
    originCurrency: {
      transactionCurrency: "USD",
      transactionAmount: 1000.00,
    },
    destinationUserId: "864921",
    originUserId: "296341",
    type: "CRYPTO_DEPOSIT",
    status: "FLAG",
  },
  {
    transactionId: "T_345678",
    createdAt: 1676598721000,
    destinationAmount: {
      transactionCurrency: "INR",
      transactionAmount: 17890.00,
    },
    destinationCurrency: {
      transactionCurrency: "USD",
      transactionAmount: 225.25,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 200.00,
    },
    originCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 168.25,
    },
    destinationUserId: "175294",
    originUserId: "175294",
    type: "FIAT_WIDRAWAL",
    status: "ALLOW",
  },
  {
    transactionId: "T_456789",
    createdAt: 1688745234000,
    destinationAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 3500.00,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 4250.50,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 1000.00,
    },
    originCurrency: {
      transactionCurrency: "INR",
      transactionAmount: 67755.00,
    },
    destinationUserId: "108563",
    originUserId: "593627",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "T_567890",
    createdAt: 1702564823000,
    destinationAmount: {
      transactionCurrency: "USD",
      transactionAmount: 125.50,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 105.75,
    },
    originAmount: {
      transactionCurrency: "INR",
      transactionAmount: 7785.00,
    },
    originCurrency: {
      transactionCurrency: "USD",
      transactionAmount: 100.00,
    },
    destinationUserId: "384615",
    originUserId: "298765",
    type: "CRYPTO_WITHDRAW",
    status: "ALLOW",
  },
  {
    transactionId: "ETH348573",
    createdAt: 1657890123456,
    destinationAmount: {
      transactionCurrency: "USD",
      transactionAmount: 100.57,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "ETH",
      transactionAmount: 0.1256,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "98261",
    originUserId: "98261",
    type: "CRYPTO_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "INR485961",
    createdAt: 1657890123456,
    destinationAmount: {
      transactionCurrency: "INR",
      transactionAmount: 25000,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 350.78,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "75628",
    originUserId: "75628",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "TRY768394",
    createdAt: 1657890123456,
    destinationAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 5000.50,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 1456.22,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "12345",
    originUserId: "12345",
    type: "FIAT_WITHDRAWAL",
    status: "ALLOW",
  },
  {
    transactionId: "CRYP-1274",
    createdAt: 1662079681000,
    destinationAmount: {
      transactionCurrency: "INR",
      transactionAmount: 15000,
    },
    destinationCurrency: {
      transactionCurrency: "USD",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 200,
    },
    originCurrency: {
      transactionCurrency: "INR",
      transactionAmount: 0,
    },
    destinationUserId: "37842",
    originUserId: "37842",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "CRYP-1275",
    createdAt: 1662104081000,
    destinationAmount: {
      transactionCurrency: "TRY",
      transactionAmount: 3000,
    },
    destinationCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    originAmount: {
      transactionCurrency: "EUR",
      transactionAmount: 100,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "55789",
    originUserId: "55789",
    type: "CRYPTO_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "CRYP-1276",
    createdAt: 1662128481000,
    destinationAmount: {
      transactionCurrency: "USD",
      transactionAmount: 0,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 1000,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 100,
    },
    originCurrency: {
      transactionCurrency: "TRY",
      transactionAmount: 0,
    },
    destinationUserId: "28546",
    originUserId: "28546",
    type: "FIAT_WIDRAWAL",
    status: "FLAG",
  },
  {
    transactionId: "CRYP-1277",
    createdAt: 1662152881000,
    destinationAmount: {
      transactionCurrency: "EUR",
      transactionAmount: 0,
    },
    destinationCurrency: {
      transactionCurrency: "INR",
      transactionAmount: 15000,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 200,
    },
    originCurrency: {
      transactionCurrency: "TRY",
      transactionAmount: 0,
    },
    destinationUserId: "72316",
    originUserId: "72316",
    type: "CRYPTO_DEPOSIT",
    status: "ALLOW",
  },
  {
    transactionId: "CRYP-1278",
    createdAt: 1662177281000,
    destinationAmount: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationCurrency: {
      transactionCurrency: "EUR",
      transactionAmount: 500,
    },
    originAmount: {
      transactionCurrency: "USD",
      transactionAmount: 100,
    },
    originCurrency: {
      transactionCurrency: "-",
      transactionAmount: 0,
    },
    destinationUserId: "93682",
    originUserId: "93682",
    type: "FIAT_DEPOSIT",
    status: "ALLOW",
  }


  // add more transaction objects here...
];
type SortingParams = {
  sortBy: keyof Transaction;
  sortOrder: "asc" | "desc";
};

type FilteringParams = {
  type?: string;
  status?: string;
};

export function getTransactions(params: {
  page: number;
  sorting?: SortingParams;
  filtering?: FilteringParams;
}): Promise<{
  total: number;
  data: Transaction[];
}> {
  const { page, sorting, filtering } = params;

  // Apply sorting if provided
  let searchResult = data;
  if (sorting) {
    searchResult = searchResult.sort((a, b) => {
      const aVal = a[sorting.sortBy];
      const bVal = b[sorting.sortBy];
      if (sorting.sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }

  // Apply filtering if provided
  if (filtering) {
    if (filtering.type) {
      searchResult = searchResult.filter(
        (transaction) => transaction.type === filtering.type
      );
    }
    if (filtering.status) {
      searchResult = searchResult.filter(
        (transaction) => transaction.status === filtering.status
      );
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: searchResult.length,
        data: searchResult.slice((page - 1) * 20, page * 20),
      });
    }, 500 + Math.round(Math.random() * 3000));
  });
}