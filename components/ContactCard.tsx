import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { ContactDetails } from '../types';

interface ContactCardProps {
  details: ContactDetails;
  label: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ details, label }) => {
  return (
    <div className="bg-white border-t border-b md:border border-stone-200 p-6 md:p-8 mt-10 md:rounded-sm shadow-sm">
      <h3 className="font-serif text-lg text-stone-800 mb-6 border-b border-stone-100 pb-2">
        {label}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-stone-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-stone-800">{details.name}</p>
            </div>
          </div>
          
          <a href={`tel:${details.phone}`} className="flex items-center gap-3 group">
            <Phone className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors shrink-0" />
            <span className="text-stone-600 group-hover:text-stone-900 transition-colors">
              {details.phoneDisplay}
            </span>
          </a>

          <a href={`mailto:${details.email}`} className="flex items-center gap-3 group">
            <Mail className="w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors shrink-0" />
            <span className="text-stone-600 group-hover:text-stone-900 transition-colors break-all">
              {details.email}
            </span>
          </a>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-stone-400 mt-1 shrink-0" />
          <div className="text-stone-600 leading-relaxed">
            <p className="font-medium text-stone-800 mb-1">{details.locationName}</p>
            <p>{details.address.street}</p>
            <p>{details.address.zipCity}</p>
            <p>{details.address.country}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.address.street + ' ' + details.address.zipCity)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs uppercase tracking-wider text-stone-400 hover:text-stone-800 border-b border-transparent hover:border-stone-800 transition-all"
            >
              Google Maps &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;