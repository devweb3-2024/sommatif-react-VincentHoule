import { Button, ButtonBase, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import Carte, { ICarte } from "./carte.component";



export default function Home() {

    const [nbTentative, setNbTentative] = useState(0)

    const carteVide: ICarte =
    {
        id: 0,
        image: 0,
        imageDos: "",
        tourner: false,
        trouver: false

    }
    const [premiereImage, setPremiereImage] = useState(carteVide)
    const [deuxiemeImage, setDeuxiemeImage] = useState(carteVide)
    const dessusCarte: String = "dessus-carte.svg"
    const listeCarteVide: ICarte[] = []
    const [listeCarte, setListeCarte] = useState(listeCarteVide)

    useEffect(() => {
        attribuerCarte()
    }, [])

    function attribuerCarte()
    {
        setNbTentative(20)
        const listeDeCarte: ICarte[] = [
            {
                id: 1,
                imageDos: dessusCarte,
                image: 1,
                tourner: false,
                trouver: false
            },
            {
                id: 2,
                imageDos: dessusCarte,
                image: 2,
                tourner: false,
                trouver: false
            }, {
                id: 3,
                imageDos: dessusCarte,
                image: 3,
                tourner: false,
                trouver: false
            }, {
                id: 4,
                imageDos: dessusCarte,
                image: 4,
                tourner: false,
                trouver: false
            }, {
                id: 5,
                imageDos: dessusCarte,
                image: 5,
                tourner: false,
                trouver: false
            }, {
                id: 6,
                imageDos: dessusCarte,
                image: 6,
                tourner: false,
                trouver: false
            }, {
                id: 7,
                imageDos: dessusCarte,
                image: 7,
                tourner: false,
                trouver: false
            }, {
                id: 8,
                imageDos: dessusCarte,
                image: 8,
                tourner: false,
                trouver: false
            }, {
                id: 9,
                imageDos: dessusCarte,
                image: 1,
                tourner: false,
                trouver: false
            }, {
                id: 10,
                imageDos: dessusCarte,
                image: 2,
                tourner: false,
                trouver: false
            }, {
                id: 11,
                imageDos: dessusCarte,
                image: 3,
                tourner: false,
                trouver: false
            }, {
                id: 12,
                imageDos: dessusCarte,
                image: 4,
                tourner: false,
                trouver: false
            }, {
                id: 13,
                imageDos: dessusCarte,
                image: 5,
                tourner: false,
                trouver: false
            }, {
                id: 14,
                imageDos: dessusCarte,
                image: 6,
                tourner: false,
                trouver: false
            }, {
                id: 15,
                imageDos: dessusCarte,
                image: 7,
                tourner: false,
                trouver: false
            }, {
                id: 16,
                imageDos: dessusCarte,
                image: 8,
                tourner: false,
                trouver: false
            }

        ]
        listeDeCarte.sort(() => Math.random() - 0.5)
        setListeCarte(listeDeCarte)
    }


    function assignerCarte(carte: ICarte) {

        if (premiereImage.image == 0) {
            setPremiereImage(carte)
        }
        else if (premiereImage.image != 0 && deuxiemeImage.image == 0) {
            setDeuxiemeImage(carte)

        }
    }

    function recommencer()
    {
        attribuerCarte
        setNbTentative(20)
    }

    return (
        <>
            <Button onClick={() => recommencer()}>Recommencer</Button>

            <span>Nombre tentative : {nbTentative}</span>
            <Grid2 container spacing={2} columns={4}>
                {listeCarte && listeCarte.map((carte) => {

                    function verifierCarte() {
                        if (premiereImage.image != 0 && deuxiemeImage.image != 0) {
                            if (premiereImage.image == deuxiemeImage.image && premiereImage.id != deuxiemeImage.id) {
                                premiereImage.trouver = true
                                deuxiemeImage.trouver = true

                            }
                            else{
                                setNbTentative(nbTentative - 1)

                            }
                            premiereImage.tourner = false
                            premiereImage.tourner = false
                            setListeCarte(listeCarte)


                        }

                    }

                    return (
                        <Grid2 key={carte.id.toString()} size={1}>
                            <ButtonBase
                                onClick={() => {
                                    carte.tourner = true
                                    setListeCarte(listeCarte)
                                    assignerCarte(carte)
                                    verifierCarte()

                                }}>
                                <Carte
                                    id={carte.id}
                                    image={carte.image}
                                    imageDos={dessusCarte}
                                    tourner={carte.tourner}
                                    trouver={carte.trouver}
                                >
                                </Carte>
                            </ButtonBase>

                        </Grid2>
                    )
                })}
            </Grid2>

        </>
    );
}

