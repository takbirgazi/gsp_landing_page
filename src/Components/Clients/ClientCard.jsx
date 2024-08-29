

const ClientCard = ({ clientData }) => {
    const { name, image } = clientData;
    return (
        <div className="border border-gray-500 rounded-md w-full h-full flex items-center justify-center bg-white">
            <img className="rounded-md object-cover p-3" src={image} alt={name} />
        </div>
    );
};

export default ClientCard;