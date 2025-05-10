
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-music-800 text-white py-12 px-8 md:px-20 dark:bg-dark-purple dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-extrabold text-2xl mb-4">MéloDimensions</h3>
          <p className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed">
            Une plateforme dédiée à l'exploration de la musique, de ses origines à ses multiples expressions modernes, 
            vous invitant à un voyage sonore passionnant et enrichissant.
          </p>
          <p className="mt-4 text-xs text-gray-300 dark:text-gray-400">
            © 2025 MéloDimensions. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-gray-300 dark:text-gray-400">
            Créé par Geoffroy Streit
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-white dark:text-primary-purple">Explorer</h4>
          <ul className="space-y-3 text-gray-200 dark:text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-primary-purple transition">Accueil</Link></li>
            <li><Link to="/physique-son" className="hover:text-primary-purple transition">Physique du Son</Link></li>
            <li><Link to="/culture" className="hover:text-primary-purple transition">Culture Musicale</Link></li>
            <li><Link to="/technique" className="hover:text-primary-purple transition">Aspects Techniques</Link></li>
            <li><Link to="/societe" className="hover:text-primary-purple transition">Fonctions Sociales</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-white dark:text-primary-purple">Informations</h4>
          <ul className="space-y-3 text-gray-200 dark:text-gray-300 text-sm">
            <li><Link to="/a-propos" className="hover:text-primary-purple transition">À propos</Link></li>
            <li><Link to="/actualite" className="hover:text-primary-purple transition">Actualité</Link></li>
            <li><Link to="/ressources" className="hover:text-primary-purple transition">Ressources</Link></li>
            <li><Link to="/glossaire" className="hover:text-primary-purple transition">Glossaire</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wide text-white dark:text-primary-purple">Contact</h4>
          <p className="text-gray-200 dark:text-gray-300 text-sm">
            Contactez-nous via <a href="mailto:contact@melodimensions.fr" className="underline hover:text-primary-purple">contact@melodimensions.fr</a>
          </p>
          <div className="flex space-x-5 mt-4 text-gray-200 dark:text-gray-300 text-lg">
            <a href="https://twitter.com/melodimensions" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary-purple transition">
              Twitter
            </a>
            <a href="https://facebook.com/melodimensions" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-purple transition">
              Facebook
            </a>
            <a href="https://instagram.com/melodimensions" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-purple transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
