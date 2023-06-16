import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import SessionCard from '../Partials/SessionCard';
import DetailsLayout from './Partials/DetailsLayout';

const SessionDetails = ({ auth, session }) => {
    session = session.data;
    return (
      <MainLayout>
        <Head title="Session Details" />
        <div className="container">
          <DetailsLayout session={session} />
        </div>
      </MainLayout>
    );
  };

  export default SessionDetails;
