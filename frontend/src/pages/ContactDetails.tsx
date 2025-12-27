import { useEffect, useState } from "react";
import { getContact, deleteContact } from "../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    getContact(Number(id)).then(setContact);
  }, [id]);

  async function handleDelete() {
    await deleteContact(Number(id));
    navigate("/");
  }

  if (!contact) return <p>Chargement...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          border: "1px solid rgba(11, 27, 42, 0.08)",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h3">
            {contact.prenom} {contact.nom}
          </Typography>
          <Stack spacing={1}>
            <Typography color="text.secondary">Email</Typography>
            <Typography>{contact.email}</Typography>
            <Typography color="text.secondary">Adresse</Typography>
            <Typography>{contact.adresse}</Typography>
            <Typography color="text.secondary">Telephone</Typography>
            <Typography>{contact.tel}</Typography>
          </Stack>
          <Box sx={{ pt: 1 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="outlined" component={Link} to={`/edit/${contact.id}`}>
                Modifier
              </Button>
              <Button variant="contained" color="primary" onClick={handleDelete}>
                Supprimer
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </motion.div>
  );
}
