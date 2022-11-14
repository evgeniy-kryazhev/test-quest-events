import './index.scss';
import React from "react";
import { FC } from "react";

interface IEventCardProps {
    title: string;
    body: string;
}

const EventCard:FC<IEventCardProps> = ({title, body}) => {
    return (
        <section className="event-card">
            <article>{title}</article>
            {body}
        </section>
    );
}

export default EventCard;