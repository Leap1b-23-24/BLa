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
import SingleNewProduct from "./SingleNewProduct";
const productData = ["№", "Бүтээгдэхүүн", "Зарагдсан", "Үнэ"];
const singleProductData = [
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
  },
  {
    OrderNumber: 1,
    img: "https://s3-alpha-sig.figma.com/img/e08f/4aba/03f40085d3fb49f21e1d8c21a73fc140?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XiuiDA4hlMTdLM08Eocin2kT9hQq7FUTy0EDllV7au5ehO5HR1xw51ChpWFAx0ZirNihreVUJFQL-nC4RJx67czXsXSrzSXUdTgdo5y9qlBwR4DYMmFjSkBZlGHhri2ANdlBRPIDyqiZNeo57opXjd18n0njwPPqipahnW7wUF5SkfZDE9rJXKWOgJ81aHzWZlviEgP6K6Q5tAvD7gByJfGAe83b8rU6YCId1mu4~pZJexj6pM~HEiHmAyUDM9TrTkOrIBn4LfdchpXsqdrjFBP~5aFq5waVfmegpclZ-lmYiW9HFkr1EpX8Jyq~LCs6oR9mLK~uXxchTciAYMXXJw__",
    title: "WOMENS HORSEBIT MULE",
    id: "#12345678",
    soldNumber: "200",
    Price: "12,000₮",
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

export default function NewProduct() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="right">Бүтээгдэхүүн</StyledTableCell>
            <StyledTableCell align="right">Зарагдсан</StyledTableCell>
            <StyledTableCell align="right">Үнэ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {singleProductData.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.OrderNumber}
              </StyledTableCell>
              <StyledTableCell align="right">{data.id}</StyledTableCell>
              <StyledTableCell align="right">{data.soldNumber}</StyledTableCell>
              <StyledTableCell align="right">{data.Price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
