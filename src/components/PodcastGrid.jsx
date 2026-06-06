import PodcastCard  from "./PodcastCard";

/**
 * Display a grid layout of podcast preview cards.Each card includes
 * podcast details: image, title, number of seasons,
 *  genres(as styled tags), and the last updated date.
 * @param {Object} props
 * @param {array<Object>} props.podcasts - Array of podcast  objects to display.
 * @param {array<Object>} props.genres - Array of genre objects for mapping IDs to titles.
 * @return {JSX.Element} the rendered podcast grid component.
 */
export default function PodcastGrid({podcasts, genres}) {
    return (
        <div className="podcast-grid-container">
            {podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
            ))}
        </div>
    );   
}