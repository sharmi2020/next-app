// import Link from 'next/link';
import homeImg from 'public/home.jpg';
import Hero from '@/Components/hero'; 

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
);
}
