import { useEffect, useState } from "react";
import { getContacts, type Contact } from "../services/api";
import ContactCard from "../components/ContactCard";
import { Box, Button, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getContacts()
      .then(setContacts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Stack spacing={4}>
      {/* HEADER */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          background:
            "linear-gradient(135deg, rgba(11, 61, 145, 0.08) 0%, rgba(214, 167, 86, 0.12) 100%)",
          border: "1px solid rgba(11, 27, 42, 0.08)",
        }}
      >
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h3">Carnet de contacts premium</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
            Gardez vos relations organisées, accès rapides, et informations toujours à jour
            dans un tableau clair et sécurisé.
          </Typography>
          <Button variant="contained" size="large" component={Link} to="/add">
            Ajouter un contact
          </Button>
        </Stack>
      </Paper>

      {/* STATS */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Paper elevation={0} sx={{ p: 2.5, flex: 1, borderRadius: 3 }}>
          <Typography variant="overline" color="text.secondary">Total</Typography>
          <Typography variant="h4">{contacts.length}</Typography>
          <Typography color="text.secondary">Contacts actifs</Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 2.5, flex: 1, borderRadius: 3 }}>
          <Typography variant="overline" color="text.secondary">Récents</Typography>
          <Typography variant="h4">24h</Typography>
          <Typography color="text.secondary">Dernière mise à jour</Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 2.5, flex: 1, borderRadius: 3 }}>
          <Typography variant="overline" color="text.secondary">État</Typography>
          <Typography variant="h4">Synchro</Typography>
          <Typography color="text.secondary">Sauvegarde locale</Typography>
        </Paper>
      </Stack>

      {/* LISTE DES CONTACTS */}
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Liste des contacts
        </Typography>

        {/* LOADER NON ANIMÉ */}
        {loading && (
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
            <Stack alignItems="center" spacing={2}>
              <CircularProgress color="primary" />
              <Typography color="text.secondary">
                Chargement des contacts...
              </Typography>
            </Stack>
          </Paper>
        )}

        {/* LISTE ANIMÉE */}
        {!loading && (
          <MotionStack
            spacing={2}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.005 }, // ultra rapide
              },
            }}
          >
            {contacts.map(contact => (
              <motion.div
                key={contact.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <ContactCard contact={contact} />
              </motion.div>
            ))}

            {contacts.length === 0 && (
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
                <Typography color="text.secondary">
                  Aucun contact pour le moment. Commencez en ajoutant votre premier contact.
                </Typography>
              </Paper>
            )}
          </MotionStack>
        )}
      </Box>
    </Stack>
  );
}
