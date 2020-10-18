const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //Insert table's data
     await saveOrphanage(db, {
        id: 1,
        lat: "-27.2058303",
        lng: "-49.663216",
        name: "Lar das meninos",
        about: "Presta assistência à crianças de 06 a 15 anos que se encontram situação de risco e/ou vulnerabilidade social.",
        whatsapp: "984210452",
        images: [
            "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas dás 18h até 8h",
        open_on_weekends: "1"
    })

    //query table's data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //query only one orphanage, by id
    const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '2'")
    console.log(orphanage)

    //exclude table´s data
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))


})