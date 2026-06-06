import { useEffect,useState } from 'react';
import  PodcastGrid  from './components/PodcastGrid';
import { genres} from './data';
import { fetchPodcasts } from './api/fetchPodcasts';
import Header from './components/Header';

/**
 * App - the root component of the podcast Explorer application. It handles :
 * - fetching podcast data from remote API
 * - managing loading and error states
 * - rendering the podcast grid once data is fetched
 * displays a header and fallback UI during loading and error states.
 
 * @returns {JSX.Element} - The rendered Application interface.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />
      <main>
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}
        {error && (
          <div className="message-container">
            <div className="error">Error occured while fetching podcasts {error}</div>
          </div>
        )}
        {!loading && !error && <PodcastGrid podcasts={podcasts} />}
      </main>
    </>
   )
   };