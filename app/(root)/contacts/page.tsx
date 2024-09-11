import { ContactInfo, ContactSocial, Container, SearchRes } from '@/shared/components/shared';
import { Chernivtsi, Kyiv } from '@/shared/constants';
import React from 'react';

export default async function Contacts() {
    return (
        <Container className="mt-6">
            <SearchRes />
            <ContactInfo place={Kyiv.place} time={Kyiv.time} metro={Kyiv.metro} street={Kyiv.street} hasMetro={true} />
            <ContactInfo place={Chernivtsi.place} time={Chernivtsi.time} street={Chernivtsi.street} grade='4.5'/>
            <ContactSocial />
        </Container>
    );
}
