import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
}

export function EventCard({ event, onRegister }: EventCardProps) {
  const isFullyBooked = event.registeredCount >= event.capacity;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Calendar size={18} />
          <span>{new Date(event.date).toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <MapPin size={18} />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Users size={18} />
          <span>{event.registeredCount} / {event.capacity} participants</span>
        </div>
        
        <button
          onClick={() => onRegister(event.id)}
          disabled={isFullyBooked}
          className={`w-full py-2 px-4 rounded-md ${
            isFullyBooked
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isFullyBooked ? 'Complet' : "S'inscrire"}
        </button>
      </div>
    </div>
  );
}