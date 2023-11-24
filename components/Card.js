import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ActionAreaCard({
  image = {},
  title,
  description,
  href,
  date,
  isShort = true,
}) {
  return (
    // <Link href={href}>
    <Card sx={{ maxWidth: 345, minHeight: isShort ? 350 : 500 }}>
      <CardActionArea href={href}>
        <CardMedia
          component="img"
          height="140"
          image={`http:${image.file?.url}?fm=webp&q=80&w=500`}
          alt={image.description | image.title}
        />
        <CardContent
          sx={{
            minHeight: isShort ? 210 : 360,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body3" color="text.secondary" mt={"auto"}>
            {new Date(date).toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // </Link>
  );
}

export default ActionAreaCard;
