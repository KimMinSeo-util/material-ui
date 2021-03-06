import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }),
);

export default function BadgeMax() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={99} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} max={999} color="primary">
        <MailIcon />
      </Badge>
    </div>
  );
}
