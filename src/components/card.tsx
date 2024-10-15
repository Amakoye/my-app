import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";

interface CardProps {
  title: string;
  timestamp: string;
  description: string;
  imageUrl: string;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  timestamp,
  description,
  imageUrl,
}) => {
  return (
    <Card>
      <CardHeader
        // eslint-disable-next-line @next/next/no-img-element
        avatar={<img src={imageUrl} alt="profile" />}
        title={title}
        subheader={timestamp}
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
