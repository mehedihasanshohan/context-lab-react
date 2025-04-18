import { useContext } from 'react';
import { ProfileContext } from './context/ProfileContext';

export default function ProfileSection({ children, isFancy }) {
  const level = useContext(ProfileContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext value={level + 1}>
        {children}
      </LevelContext>
    </section>
  );
}
