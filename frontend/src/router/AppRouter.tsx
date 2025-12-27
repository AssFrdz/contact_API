import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import AddContact from "../pages/AddContact";
import EditContact from "../pages/EditContact";
import ContactDetails from "../pages/ContactDetails";

export default function AppRouter(){
    return (

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
