"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SingleOrderTable from "./SingleOrderTable";
const OrderTableData = [
  { label: "Захиалгын ID дугаар", width: 191 },
  { label: "Үйлчлүүлэгч", width: 209 },
  { label: "Огноо", width: 168 },
  { label: "Цаг", width: 129 },
  { label: "Төлбөр", width: 137 },
  { label: "Статус", width: 214 },
  { label: "Дэлгэрэнгүй", width: 122 },
];
const OrderTableDatas = [
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
  },
  {
    id: "#12345678",
    userName: "Zoloo",
    userEmail: "Zoloo@gmail.com",
    orderData: "2023-01-01",
    orderTime: "10:58",
    orderPrice: "12,000₮",
    orderStatus: "arrived",
    img: "./ArrowRight.png",
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
            <StyledTableCell align="right">Үйлчлүүлэгч</StyledTableCell>
            <StyledTableCell align="right">Огноо</StyledTableCell>
            <StyledTableCell align="right">Цаг</StyledTableCell>
            <StyledTableCell align="right">Төлбөр</StyledTableCell>
            <StyledTableCell align="right">Статус</StyledTableCell>
            <StyledTableCell align="right">Дэлгэрэнгүй</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {OrderTableDatas.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="right">{data.userName}</StyledTableCell>
              <StyledTableCell align="right">{data.userEmail}</StyledTableCell>
              <StyledTableCell align="right">{data.orderData}</StyledTableCell>
              <StyledTableCell align="right">{data.orderTime}</StyledTableCell>
              <StyledTableCell align="right">{data.orderPrice}</StyledTableCell>
              <StyledTableCell align="right">
                {data.orderStatus}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
