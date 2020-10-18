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
    IconButton
} from "@material-ui/core";

import EditIcon from '@material-ui/icons/Edit';

import TableHeader from './TableHeader'

const ListTable = ({ label, defaultSort, columns, rows, onEditRow }) => {
    const [sort, setSort] = useState(defaultSort);
    return (
        <Table aria-label={label} size="small">
            <TableHeader
                data={columns}
                sort={sort}
                onSetSort={setSort}
            />

            <TableBody>
                {rows.map((row, idx) => (
                    <TableRow key={`${row._id}_${idx}`}>
                        {
                            columns.map(col => (
                                col.type === 'image'
                                ?  <TableCell key={col.field}>
                                    <Avatar
                                    variant="square"
                                    alt="user"
                                    src={`${row.imageurl ? row.imageurl : "#"}`}
                                    >
                                    </Avatar>
                                    </TableCell>
                                : (col.field === 'actions'
                                    ? <TableCell key={col.field} onClick={() => onEditRow(row)}>
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    :<TableCell key={col.field}>{row[col.field]}</TableCell>)
                            ))
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListTable;