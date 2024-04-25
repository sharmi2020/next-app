import reliabilityImg from 'public/reliability.jpg'
import Hero from '@/Components/hero'; 

export default function reliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="car factory"
      title="super high reliability Hosting"
    />
);
}