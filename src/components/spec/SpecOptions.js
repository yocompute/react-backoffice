
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { SpecOption } from "./SpecOption";

const useStyles = makeStyles((theme) => ({
  quantityCtrl: {
    width: '150px'
  },
  increaseBtn: {
    width: '30px',
    height: '30px',
    float: 'left'
  },
  decreasebtn: {
    width: '30px',
    height: '30px',
    float: 'left'
  },
  quantityInput: {
    width: 'calc(100% - 80px)',
    float: 'left',
    height: '30px',
    border: '1px solid #888'
  }
}))


export const SpecOptions = ({ options, onChange }) => {
  const classes = useStyles();
  const [list, setList] = useState(options ? options : []);
  const [name, setName] = useState();

  const handleChange = (e) => {
    const v = e.target.value;
    setName(v);
  }

  const handleAdd = (e) => {
    const newList = [...list, { name, id: uuidv4() }];
    setList(newList);
    onChange(newList);
  }

  const handleRemove = (id) => {
    const newList = list.filter(it => it.id !== id);
    setList(newList);
    onChange(newList);
  }

  const handleSelect = (it) => {
    const item = it;
  }

  return (
    <div>

      <input className={classes.name} type="text" value={name} onChange={handleChange} />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleAdd}
      >
        Add
      </Button>
      {
        list && list.length > 0 &&
        list.map(it => (
          <SpecOption
            key={it.id}
            item={it}
            onSelect={handleSelect}
            onRemove={handleRemove}
          />
        ))
      }
    </div>
  )
}