import { useState } from "react";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  onSubmit: (data: any) => void;
  initial?: any;
}

export default function ContactForm({ onSubmit, initial }: Props) {
  const [form, setForm] = useState(
    initial || {
      prenom: "",
      nom: "",
      email: "",
      adresse: "",
      tel: "",
    }
  );

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid rgba(11, 27, 42, 0.08)",
      }}
    >
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Typography variant="h4">
          {initial ? "Mettre a jour le contact" : "Nouveau contact"}
        </Typography>
        <Typography color="text.secondary">
          Saisissez des informations claires pour garder un carnet impeccable.
        </Typography>
      </Stack>
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(form);
        }}
      >
        <Stack spacing={2}>
          <TextField
            name="prenom"
            label="Prenom"
            fullWidth
            onChange={handleChange}
            value={form.prenom}
          />
          <TextField
            name="nom"
            label="Nom"
            fullWidth
            onChange={handleChange}
            value={form.nom}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            onChange={handleChange}
            value={form.email}
          />
          <TextField
            name="adresse"
            label="Adresse"
            fullWidth
            onChange={handleChange}
            value={form.adresse}
          />
          <TextField
            name="tel"
            label="Telephone"
            fullWidth
            onChange={handleChange}
            value={form.tel}
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button type="submit" variant="contained" size="large">
              Enregistrer
            </Button>
          </Stack>
        </Stack>
      </motion.form>
    </Paper>
  );
}
