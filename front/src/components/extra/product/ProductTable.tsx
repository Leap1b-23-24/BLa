"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const productDatas = [
  {
    img: "./productTab.png",
    productName: "Laptop",
    productNumber: "0001",
    category: "Female",
    price: "19,000",
    total: 76,
    sold: 30,
    addDate: "2024-01-10",
  },
  {
    img: "./productTab.png",
    productName: "Laptop",
    productNumber: "0001",
    category: "Female",
    price: "19,000",
    total: 76,
    sold: 30,
    addDate: "2024-01-10",
  },
  {
    img: "./productTab.png",
    productName: "Laptop",
    productNumber: "0001",
    category: "Female",
    price: "19,000",
    total: 76,
    sold: 30,
    addDate: "2024-01-10",
  },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const ProductTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Бүтээгдэхүүн</StyledTableCell>
            <StyledTableCell align="right">Ангилал</StyledTableCell>
            <StyledTableCell align="right">Үнэ</StyledTableCell>
            <StyledTableCell>Үлдэгдэл</StyledTableCell>
            <StyledTableCell align="right">Зарагдсан</StyledTableCell>
            <StyledTableCell align="right">Нэмсэн огноо</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productDatas.map((data, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.productName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {data.productNumber}
              </StyledTableCell>
              <StyledTableCell align="right">{data.category}</StyledTableCell>
              <StyledTableCell align="right">{data.price}</StyledTableCell>
              <StyledTableCell align="right">{data.total}</StyledTableCell>
              <StyledTableCell align="right">{data.sold}</StyledTableCell>
              <StyledTableCell align="right">{data.addDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
