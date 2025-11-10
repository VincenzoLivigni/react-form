import { useState } from "react"

export default function Main() {

    const listaArticoli = [
        { id: 1, title: "10 ricette facili per la cena" },
        { id: 2, title: "Come preparare la pasta fresca fatta in casa" },
        { id: 3, title: "Segreti per un risotto cremoso perfetto" },
        { id: 4, title: "Dolci al cucchiaio: 5 idee irresistibili" },
        { id: 5, title: "Come cuocere la carne alla griglia senza errori" },
        { id: 6, title: "Ricette vegetariane gustose e semplici" },
        { id: 7, title: "Pane fatto in casa: guida passo passo" },
        { id: 8, title: "Piatti tipici regionali italiani da provare" },
        { id: 9, title: "Come preparare una pizza perfetta nel forno di casa" },
        { id: 10, title: "Trucchi per impiattare come uno chef" }
    ];

    const [articoli, setArticoli] = useState(listaArticoli);

    const [nuovoArticolo, setNuovoArticolo] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        if (nuovoArticolo.length > 0) {
            const nuovo = {
                id: articoli.length + 1,
                title: nuovoArticolo
            };
            console.log(nuovoArticolo);
            const listaAggiornata = [...articoli, nuovo]
            setArticoli(listaAggiornata)
        }
    }

    return (
        <main>
            <div className="list-container bg-dark">
                <div className="d-flex pt-5 g-3 w-100 justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={nuovoArticolo}
                            placeholder="inserisci un nuovo articolo"
                            onChange={(e) => setNuovoArticolo(e.target.value)} />
                        {/*<p>Aggiungi articolo: {nuovoArticolo}</p>*/}
                        <button type="submit">Aggiungi</button>
                    </form>
                </div>

                <ul className="py-5">
                    {
                        articoli.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}