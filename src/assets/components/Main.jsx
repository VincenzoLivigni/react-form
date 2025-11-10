export default function Main() {

    const articoli = [
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

    return (
        <main>
            <div className="list-container d-flex justify-content-center">
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