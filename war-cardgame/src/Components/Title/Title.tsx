interface TitleProps {
    text: string;
}

export default function Title({ text}: TitleProps): JSX.Element {
    return (
        <>
            <h1 className="font-black text-6xl">{text}</h1>
        </>
    );
}