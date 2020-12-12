import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Chip,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  Switch,
  IconButton,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";

import TableHeader from "./TableHeader";

const ListTable = ({ label, defaultSort, columns, rows, onEditRow }) => {
  const [sort, setSort] = useState(defaultSort);

  const rowsSort = (rows) => {
    rows.sort((a, b) => {
      return (
        a[sort[0]] &&
        (sort[0] === "owner"
          ? sort[1] > 0
            ? a[sort[0]].username.localeCompare(b[sort[0]].username)
            : b[sort[0]].username.localeCompare(a[sort[0]].username)
          : sort[0] === "brand" || sort[0] === "category"
          ? sort[1] > 0
            ? a[sort[0]].name.localeCompare(b[sort[0]].name)
            : b[sort[0]].name.localeCompare(a[sort[0]].name)
          : sort[0] === "price" || sort[0] === "cost"
          ? sort[1] > 0
            ? a[sort[0]] - b[sort[0]]
            : b[sort[0]] - a[sort[0]]
          : sort[1] > 0
          ? a[sort[0]].localeCompare(b[sort[0]])
          : b[sort[0]].localeCompare(a[sort[0]]))
      );
    });
    return rows;
  };

  return (
    <Table aria-label={label} size="small">
      <TableHeader data={columns} sort={sort} onSetSort={setSort} />

      <TableBody>
        {rowsSort(rows).map((row, idx) => (
          <TableRow key={`${row._id}_${idx}`}>
            {columns.map((col) =>
              col.type === "image" ? (
                <TableCell key={col.field}>
                  <Avatar
                    variant="square"
                    alt="user"
                    // src={`${row[col.field] ? row[col.field] : "#"}`}
                  ></Avatar>
                </TableCell>
              ) : col.field === "actions" ? (
                <TableCell key={col.field} onClick={() => onEditRow(row)}>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              ) : col.type === "object" ? (
                <TableCell key={col.field}>
                  {row[col.field][col.property]}
                </TableCell>
              ) : (
                <TableCell key={col.field}>
                  {row[col.field] ? row[col.field] : ""}
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListTable;
