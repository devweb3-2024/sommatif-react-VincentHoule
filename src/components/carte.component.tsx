

export type ICarte = {
    id: Number,
    imageDos : String,
    image : Number,
    tourner: boolean,
    trouver: boolean
}


export default function Carte(props: ICarte)
{
    return (
        <>
            <img width={150} src={props.tourner || props.trouver ?`../public/chat${props.image}.png` :`../public/${props.imageDos}`}></img>
        </>
    
    );

}