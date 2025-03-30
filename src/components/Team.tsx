import React from 'react';
import { teamMembers } from '../data';

interface TeamProps {
  isArabic: boolean;
}

export function Team({ isArabic }: TeamProps) {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16 animate-fade-in">
          {isArabic ? 'فريقنا' : 'Our Team'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="text-center group animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="mb-6 relative">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {isArabic ? member.nameAr : member.name}
              </h3>
              <p className="text-blue-600">
                {isArabic ? member.roleAr : member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}