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
} from "@material-ui/core";

import TableHeader from './TableHeader'

const ListTable = ({ label, defaultSort, columns, rows }) => {
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
                    <TableRow key={`${row.id}_${idx}`}>
                        {
                            columns.map(col => (
                                col.type === 'image'
                                ?  <Avatar
                                    variant="square"
                                    alt="user"
                                    src={`${row.imageurl ? row.imageurl : "#"}`}
                                    >
                                    </Avatar>
                                : <TableCell>{row[col.field]}</TableCell>
                            ))
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListTable;