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
const incomedata = [
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
  },
  {
    id: "#123455",
    userEmail: "zoloo@gmail.com",
    phoneNumber: "88556677",
    price: "12,000₮",
    date: "2024-01-10",
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

export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Захиалгын ID дугаар</StyledTableCell>
            <StyledTableCell align="right">Захиалагч</StyledTableCell>
            <StyledTableCell align="right">Төлбөр</StyledTableCell>
            <StyledTableCell align="right">Огноо</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomedata.map((data, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="right">{data.userEmail}</StyledTableCell>
              <StyledTableCell align="right">{data.price}</StyledTableCell>
              <StyledTableCell align="right">{data.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
