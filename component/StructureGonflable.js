import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function structureGonflable(props) {
  const { image, name, description, prix } = props;
  return (
    <Card sx={{ maxWidth: 562 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="305"
          image={image}
          alt="structure gonflable"
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
          <Typography variant="underline" component="p" textAlign="center">
            {description}
          </Typography>
          <Typography mt={1} variant="body2" component="p" textAlign="center">
            {prix}€ / j (hors livraison et pose)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          En savoir plus
        </Button>
      </CardActions>
    </Card>
  );
}
