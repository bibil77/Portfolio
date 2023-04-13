import { Stack, Typography } from "@mui/material";

export default function SliderCard(props) {
  const { title, description, tarif, image, alt } = props;
  return (
    <Stack>
      <img src={image} alt={alt} />
      <Typography variant="h3" component="h3" textAlign="center">
        {title}
      </Typography>
      <Typography variant="h6" component="p" textAlign="center">
        {description}
      </Typography>
      <Typography variant="body2" component="p" textAlign="center">
        {tarif}
      </Typography>
    </Stack>
  );
}
