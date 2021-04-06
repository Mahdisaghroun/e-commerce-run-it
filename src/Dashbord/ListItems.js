import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GroupWork from '@material-ui/icons/GroupWork';
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Store from '@material-ui/icons/Store';

export const mainListItems = (
      <div>
            <ListItem button>
                  <ListItemIcon>
                        <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                  <ListItemIcon>
                        <PeopleAlt />
                  </ListItemIcon>
                  <ListItemText primary="Clients" />
            </ListItem>
            <ListItem button>
                  <ListItemIcon>
                        <GroupWork />
                  </ListItemIcon>
                  <ListItemText primary="Partenaires" />
            </ListItem>
            <ListItem button>
                  <ListItemIcon>
                        <Store />
                  </ListItemIcon>
                  <ListItemText primary="Points de ventes" />
            </ListItem>
            <ListItem button>
                  <ListItemIcon>
                        <LayersIcon />
                  </ListItemIcon>
                  <ListItemText primary="Demandes de partenairiats" />
            </ListItem>
            <ListItem button>
                  <ListItemIcon>
                        <LayersIcon />
                  </ListItemIcon>
                  <ListItemText primary="Demandes de points de ventes" />
            </ListItem>
      </div>
);

export const secondaryListItems = (
      <div>
            <ListSubheader inset>Gestions des produits</ListSubheader>
            <ListItem button>
                  <ListItemIcon>
                        <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Demandes d'ajouts des produits" />
            </ListItem>

      </div>
);