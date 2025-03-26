import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Event, EventFormData } from './types';
import { EventCard } from './components/EventCard';
import { EventForm } from './components/EventForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Concert de Jazz',
      description: 'Une soirée exceptionnelle avec les meilleurs artistes de jazz.',
      date: '2024-03-25T20:00',
      location: 'Salle Pleyel, Paris',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80',
      capacity: 200,
      registeredCount: 150,
    },
    {
      id: '2',
      title: 'Exposition d\'Art Moderne',
      description: 'Découvrez les œuvres des artistes contemporains les plus prometteurs.',
      date: '2024-04-15T10:00',
      location: 'Galerie d\'Art Moderne, Lyon',
      image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80',
      capacity: 100,
      registeredCount: 45,
    },
  ]);

  const handleCreateEvent = (formData: EventFormData) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      ...formData,
      registeredCount: 0,
    };
    setEvents([...events, newEvent]);
    setShowForm(false);
  };

  const handleRegister = (eventId: string) => {
    setEvents(events.map(event => {
      if (event.id === eventId && event.registeredCount < event.capacity) {
        return { ...event, registeredCount: event.registeredCount + 1 };
      }
      return event;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Gestion d'Événements</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              <PlusCircle size={20} />
              {showForm ? 'Fermer' : 'Créer un événement'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {showForm && (
          <div className="mb-8">
            <EventForm onSubmit={handleCreateEvent} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={handleRegister}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;