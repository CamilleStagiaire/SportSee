import { Link } from 'react-router-dom';

/**
 * Composant de la page d'erreur
 * @param {string} message
 * @returns {React.Element}
 */
function Error({ message = "Oups! La page que vous demandez n'existe pas." }) {
  return (
    <div className="error">
      <p className="error-text">{message}</p>
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
