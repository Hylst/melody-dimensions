
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Index from "./pages/Index";
import PhysiqueSon from "./pages/PhysiqueSon";
import CultureMusicale from "./pages/CultureMusicale";
import AspectsTechniques from "./pages/AspectsTechniques";
import FonctionsSociales from "./pages/FonctionsSociales";
import Musicotherapie from "./pages/Musicotherapie";
import Phenomenes from "./pages/PhysiqueSon/Phenomenes";
import Instruments from "./pages/PhysiqueSon/Instruments";
import NotFound from "./pages/NotFound";
import Changelog from "./components/Changelog";
import APropos from "./pages/APropos";
import Actualite from "./pages/Actualite";
import Ressources from "./pages/Ressources";
import MusicCursor from "./components/MusicCursor";
import Glossaire from "./pages/Glossaire";
import GuidesPage from "./pages/technique/GuidesPage";
import OutilsPage from "./pages/technique/OutilsPage";
import GlossairePage from "./pages/technique/GlossairePage";
import TutorielsPage from "./pages/technique/TutorielsPage";

// Import des composants de tutoriels individuels
import AudacityBasics from "./components/technique/tutoriels/AudacityBasics";
import AudacityCleaning from "./components/technique/tutoriels/AudacityCleaning";
import ArdourMultitrack from "./components/technique/tutoriels/ArdourMultitrack";
import LmmsMidi from "./components/technique/tutoriels/LmmsMidi";
import HomeStudio from "./components/technique/tutoriels/HomeStudio";
import CakewalkRecording from "./components/technique/tutoriels/CakewalkRecording";
import MicrophoneTechniques from "./components/technique/tutoriels/MicrophoneTechniques";
import SmartphoneRecording from "./components/technique/tutoriels/SmartphoneRecording";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MusicCursor />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/physique-son" element={<PhysiqueSon />} />
            <Route path="/physique-son/phenomenes" element={<Phenomenes />} />
            <Route path="/physique-son/instruments" element={<Instruments />} />
            <Route path="/culture" element={<CultureMusicale />} />
            <Route path="/technique" element={<AspectsTechniques />} />
            <Route path="/technique/guides" element={<GuidesPage />} />
            <Route path="/technique/outils" element={<OutilsPage />} />
            <Route path="/technique/glossaire" element={<GlossairePage />} />
            <Route path="/technique/tutoriels" element={<TutorielsPage />} />
            
            {/* Routes des tutoriels individuels */}
            <Route path="/technique/tutoriels/audacity-basics" element={<AudacityBasics />} />
            <Route path="/technique/tutoriels/audacity-cleaning" element={<AudacityCleaning />} />
            <Route path="/technique/tutoriels/ardour-multitrack" element={<ArdourMultitrack />} />
            <Route path="/technique/tutoriels/lmms-midi" element={<LmmsMidi />} />
            <Route path="/technique/tutoriels/home-studio" element={<HomeStudio />} />
            <Route path="/technique/tutoriels/cakewalk-recording" element={<CakewalkRecording />} />
            <Route path="/technique/tutoriels/microphone-techniques" element={<MicrophoneTechniques />} />
            <Route path="/technique/tutoriels/smartphone-recording" element={<SmartphoneRecording />} />
            
            <Route path="/societe" element={<FonctionsSociales />} />
            <Route path="/societe/musicotherapie" element={<Musicotherapie />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/actualite" element={<Actualite />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/glossaire" element={<Glossaire />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
