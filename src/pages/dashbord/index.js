import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';

import Tile from './tile'


const useStyles = makeStyles({
    tileRow: {
        display: 'flex'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const tiles = [
    { name: 'Visitors', text: '120' },
    { name: 'Sales', text: '$3218' },
    { name: 'Activity', text: '500' },
    { name: 'Events', text: '3' },
];

const DashbordPage = () => {

    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    // useEffect(() => {
    //     fetchUsers();
    // }, [fetchUsers]);
    const [checked, setChecked] = React.useState(true);

    const handleChangeCheckbox = (event) => {
      setChecked(event.target.checked);
    };
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div>
            <div className={classes.tileRow}>
                {
                    tiles &&
                    tiles.map(tile => (
                        <Tile key={tile.name} data={tile} />
                    ))
                }
            </div>

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>

          <Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="secondary">
  <MailIcon />
</Badge>
<Badge badgeContent={4} color="error">
  <MailIcon />
</Badge>
<Chip label="Basic" color="primary"/>
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Clickable" color="secondary"/>


      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>

    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      <Checkbox
        defaultChecked
        indeterminate
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
    </div>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(
    mapStateToProps,
    null
)(DashbordPage);