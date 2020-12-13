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
import ListCell from "./ListCell";

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
                {
                rows && rows.length >0 &&
                rows.map((row, idx) => (
                    <TableRow key={`${row._id}_${idx}`}>
                        {
                            columns.map(col => <ListCell row={row} col={col} onEditRow={onEditRow}/>)
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListTable;