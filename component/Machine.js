import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BackHandIcon from "@mui/icons-material/BackHand";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShieldIcon from "@mui/icons-material/Shield";

export default function Machine(props) {
  const { image, name, description, prix, machine } = props;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="421"
            image={image}
            alt="machine à thé"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              {name}
            </Typography>
            <List>
              {description ? (
                <ListItem disablePadding>
                  <ListItemText primary={description} />
                </ListItem>
              ) : machine === "bap" ? (
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <ShieldIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Coupole de Protection" />
                </ListItem>
              ) : machine === "popcorn" ? null : (
                <>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <PropaneTankIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Capacité – volume de 14 l (env. 105 tasses)" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <AutoAwesomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Propreté – robinet et plateau
                d'égouttage"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <BackHandIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Simplicité – appareil intuitif qui
                se nettoie rapidement"
                    />
                  </ListItem>
                </>
              )}

              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <ShoppingBagIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Consommable sur Devis" />
              </ListItem>
            </List>
            <Typography variant="body2" component="p" textAlign="center">
              {prix}€ / j (hors livraison)
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            En savoir plus
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
