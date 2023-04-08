import React, { useState, useEffect } from "react";
import { getTransactions } from "./services/MockAPI";
import { RowData } from "./RowData";
import { TableProps } from "./TableProps";
import { sortDataBy } from "./sortDataBy";

const Table: React.FC<TableProps> = ({ data }) => {
  // Declare state variables with the `useState` hook
  const [tableData, setTableData] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortKey, setSortKey] = useState<keyof RowData>("transactionId");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string | null>(null);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [filteredData, setFilteredData] = useState<RowData[]>([]);

  // Fetch data on component mount to initialize `tableData` and `isLoading`
  useEffect(() => {
    getTransactions({ page: 1 }).then((result) => {
      const formattedData = result.data.map((transaction) => ({
        transactionId: transaction.transactionId,
        createdAt: transaction.createdAt,
        destinationAmount: transaction.destinationAmount.transactionAmount.toString(),
        destinationCurrency: transaction.destinationCurrency.transactionCurrency.toString(),
        originAmount: transaction.originAmount.transactionAmount.toString(),
        originCurrency: transaction.originCurrency.transactionCurrency.toString(),
        destinationUserId: transaction.destinationUserId,
        originUserId: transaction.originUserId,
        type: transaction.type,
        status: transaction.status,
      }));
      setTableData(formattedData as RowData[]);
      setIsLoading(false); // Set isLoading to false when data has been fetched
    });
  }, []);

  // Filter data based on `searchTerm`, `selectedStatusFilter`, and `selectedTypeFilter`
  useEffect(() => {
    let filteredData = tableData.filter((rowData) => { // Ensure tableData is used here
      const statusFilterPassed = !selectedStatusFilter || rowData.status === selectedStatusFilter;
      const typeFilterPassed = !selectedTypeFilter || rowData.type === selectedTypeFilter;
      return statusFilterPassed && typeFilterPassed;
    });
    if (searchTerm) {
      filteredData = filteredData.filter(
        (rowData) =>
          rowData.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.destinationAmount.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.destinationCurrency.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.originAmount.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.originCurrency.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.destinationUserId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.originUserId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          rowData.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredData(filteredData);
  }, [searchTerm, selectedStatusFilter, selectedTypeFilter, tableData]);

  // Ensure the `currentPage` is valid based on `totalPages` to avoid error
  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, filteredData, itemsPerPage]);

  // Handle sorting of table data
  const handleSort = (key: keyof RowData) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Filter the table data based on selected status and type filters
  const dataToRender = tableData.filter((rowData) => {
    const statusFilterPassed = !selectedStatusFilter || rowData.status === selectedStatusFilter;
    const typeFilterPassed = !selectedTypeFilter || rowData.type === selectedTypeFilter;
    return statusFilterPassed && typeFilterPassed;
  });

  // Filter the data by `searchTerm` if it exists, otherwise return `dataToRender`
  const filteredDataBySearchTerm = searchTerm
    ? dataToRender.filter(
      (rowData) =>
        rowData.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.destinationAmount.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.destinationCurrency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.originAmount.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.originCurrency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.destinationUserId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.originUserId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rowData.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : dataToRender;

  // Sort the filtered data by `sortKey` and `sortOrder`
  const sortedData = sortDataBy(sortKey, sortOrder, filteredDataBySearchTerm);

  // Pagination logic
  const totalPages = Math.ceil(filteredDataBySearchTerm.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = sortedData.slice(firstIndex, lastIndex);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Return a loading message if `isLoading` is true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the table
  return (
    <div className="container" id="style-4">
      <div className="filters-container">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search Values"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Items per page select */}
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value="5">5 items per page</option>
          <option value="10">10 items per page</option>
          <option value="20">20 items per page</option>
        </select>
        {/* Status filter select */}
        <select
          value={selectedStatusFilter ?? ""}
          onChange={(e) => setSelectedStatusFilter(e.target.value || null)}
        >
          <option value="">All Status</option>
          <option value="ALLOW">ALLOW</option>
          <option value="FLAG">FLAG</option>
        </select>
        {/* Type filter select */}
        <select
          value={selectedTypeFilter ?? ""}
          onChange={(e) => setSelectedTypeFilter(e.target.value || null)}
        >
          <option value="">All Types</option>
          <option value="FIAT_WITHDRAWAL">FIAT_WITHDRAWAL</option>
          <option value="CRYPTO_WITHDRAW">CRYPTO_WITHDRAW</option>
          <option value="FIAT_DEPOSIT">FIAT_DEPOSIT</option>
        </select>
      </div>

      <div className="table-container">
        <table className="styled-table">
          {/* Table header */}
          <thead>
            <tr>
              <th onClick={() => handleSort("transactionId")}>
                Transaction ID {sortOrder === "asc" ? "↑" : "↓"}{" "}
              </th>
              <th onClick={() => handleSort("createdAt")}>
                Created At {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th onClick={() => handleSort("destinationAmount")}>
                Destination Amount {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th>Destination Currency</th>
              <th onClick={() => handleSort("originAmount")}>Origin Amount {sortOrder === "asc" ? "↑" : "↓"}</th>
              <th onClick={() => handleSort("originCurrency")}>Origin Currency {sortOrder === "asc" ? "↑" : "↓"}</th>
              <th onClick={() => handleSort("destinationUserId")}>Destination User ID {sortOrder === "asc" ? "↑" : "↓"}</th>
              <th onClick={() => handleSort("originUserId")}>Origin User ID {sortOrder === "asc" ? "↑" : "↓"}</th>
              <th onClick={() => handleSort("type")}>Type {sortOrder === "asc" ? "↑" : "↓"}</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* If no rows to show, display message */}
            {currentItems.length === 0 ? (
              <tr>
                <td style={{textAlign: "center", display: "grid"}}>No rows to show</td>
              </tr>
            ) : (
              // Display current page of items
              currentItems.map((rowData) => (
                <tr>
                  <td>{rowData.transactionId}</td>
                  <td>{rowData.createdAt}</td>
                  <td>{rowData.destinationAmount}</td>
                  <td>{rowData.destinationCurrency}</td>
                  <td>{rowData.originAmount}</td>
                  <td>{rowData.originCurrency}</td>
                  <td>{rowData.destinationUserId}</td>
                  <td>{rowData.originUserId}</td>
                  <td>{rowData.type}</td>
                  <td>{rowData.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination-buttons">
          {/* Previous page button */}
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          {/* Next page button */}
          <button onClick={nextPage} disabled={currentPage === totalPages || totalPages === 0}>
            Next
          </button>
        </div>

        {/* Current page and total pages display */}
        <div className="pagination-numbers">
          <p>{`Page ${currentPage} of ${totalPages}`}</p>
        </div>
      </div>

    </div>
  );
};

export default Table;