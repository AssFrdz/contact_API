import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";

const MotionBox = motion(Box);

export default function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(245, 243, 238, 0.8)",
          color: "text.primary",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(12, 28, 43, 0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 }, py: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #0B3D91 0%, #2F5FB8 100%)",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Lumiere Contacts
              </Typography>
            </Stack>
            <Button
              component={Link}
              to={isHome ? "/add" : "/"}
              variant={isHome ? "contained" : "outlined"}
              color="primary"
            >
              {isHome ? "Nouveau contact" : "Retour a l'accueil"}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <MotionBox
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{ flexGrow: 1, py: { xs: 4, md: 6 } }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </MotionBox>
    </Box>
  );
}
