'use client';

interface Props {
    date: string;
}

function Client(props: Props) {
    return <>{props.date}</>;
}

export { Client };
