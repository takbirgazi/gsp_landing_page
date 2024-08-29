import ClientCard from "./ClientCard";

import adb from "../../assets/clients/adb.png"
import bpub from "../../assets/clients/bpub.png"
import giz from "../../assets/clients/giz.png"
import jomunaGroup from "../../assets/clients/jomuna-group.png"
import kcc from "../../assets/clients/kcc.jpg"
import kda from "../../assets/clients/kda.png"
import nabolok from "../../assets/clients/nabolok.jpg";
import practicalaction from "../../assets/clients/practicalaction-logo.png";
import rhd from "../../assets/clients/rhd.jpeg";
import unhabitat from "../../assets/clients/unhabitat-logo.jpg";
import who from "../../assets/clients/who.png";

const Clients = () => {
    const clientList = [
        {
            id: 1,
            name: "ADB",
            image: adb,
        },
        {
            id: 2,
            name: "BPUB",
            image: bpub,
        },
        {
            id: 3,
            name: "GIZ",
            image: giz,
        },
        {
            id: 4,
            name: "Jomuna Group",
            image: jomunaGroup,
        },
        {
            id: 5,
            name: "KCC",
            image: kcc,
        },
        {
            id: 6,
            name: "KDA",
            image: kda,
        },
        {
            id: 7,
            name: "Nabolok",
            image: nabolok,
        },
        {
            id: 8,
            name: "Practicalaction",
            image: practicalaction,
        },
        {
            id: 9,
            name: "RHD",
            image: rhd,
        },
        {
            id: 10,
            name: "Unhabitat",
            image: unhabitat,
        },
        {
            id: 11,
            name: "WHO",
            image: who,
        }
    ]
    return (
        <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-11 gap-5">
            {
                clientList.map(client => <ClientCard key={client.id} clientData={client} />)
            }
        </div>
    );
};

export default Clients;