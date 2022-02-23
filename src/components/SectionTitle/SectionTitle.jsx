import React from 'react';
import { Title } from './SectionTitle.styled';

export default function SectionTitle ({title, children}) {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    );
}

