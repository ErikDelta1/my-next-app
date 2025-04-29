'use client';

import { useEffect } from 'react';
import { useProfile } from '@/context/ProfileContext';
import { useRouter } from 'next/navigation';
import ProfileCard from '../../../components/ProfileCard';

export default function Dashboard() {
  const { profile, setProfile } = useProfile();
  const router = useRouter();

  /*useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/profile/');
        if (!res.ok) throw new Error('Failed to fetch profile');

        const data = await res.json();

        setProfile(data);
      } catch (err) {
        console.error('Error loading profile:', err);
      }
    };

    if (!profile) {
      fetchProfile();
    }
  }, [profile, setProfile]);*/

  if (!profile) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <div className="mb-6">
        <ProfileCard 
          name={profile.name} 
          bio={`Email: ${profile.email} | Job: ${profile.job}`} 
        />
      </div>

      <button
        onClick={() => router.push('/')}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
}