import performanceImg from 'public/performance.jpg';
import Hero from '@/Components/hero'; 

export default function PerformancePage() {
  return (
    <Hero 
      imgData={performanceImg}
      imgAlt="Welding"
      title="High performance app."
    />
);
}