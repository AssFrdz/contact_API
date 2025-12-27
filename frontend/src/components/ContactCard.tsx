import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import type { Contact } from "../services/api";
import { Link } from "react-router-dom";

interface Props {
  contact: Contact;
}

export default function ContactCard({ contact }: Props) {
  const initials = `${contact.prenom?.[0] ?? ""}${contact.nom?.[0] ?? ""}`.toUpperCase();

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid rgba(11, 27, 42, 0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 18px 40px rgba(11, 27, 42, 0.12)",
        },
      }}
    >
      <CardContent>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center">
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 52,
              height: 52,
              fontWeight: 600,
            }}
          >
            {initials || "?"}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">
              {contact.prenom} {contact.nom}
            </Typography>
            <Typography color="text.secondary">{contact.email}</Typography>
            <Typography color="text.secondary">{contact.tel}</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button component={Link} to={`/contact/${contact.id}`} variant="outlined">
              Voir
            </Button>
            <Button component={Link} to={`/edit/${contact.id}`} variant="contained">
              Modifier
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
