import PropTypes from 'prop-types';

function Section({ id, title, description, cards }) {
    return (
        <section id={id} className="py-16 text-center">
            <div className="container px-4 max-w-screen-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
                <p className="text-base md:text-lg mb-8">{description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg md:text-xl font-semibold mb-4">{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section;

Section.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cards: PropTypes.array,
}
