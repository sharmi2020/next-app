import scaleImg from 'public/scale.jpg';
import Hero from '@/Components/hero'; 

export default function scalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="scale your App"
    />
);
}