import nextjs from '../assets/icons/technology/nextjs.svg';
import react from '../assets/icons/technology/react.svg';
import typescript from '../assets/icons/technology/typescript.svg';
import tailwind from '../assets/icons/technology/tailwind.svg';
import flutter from '../assets/icons/technology/flutter.svg';
import nodejs from '../assets/icons/technology/nodejs.svg';
import nestjs from '../assets/icons/technology/nestjs.svg';
import laravel from '../assets/icons/technology/laravel.svg';
import python from '../assets/icons/technology/python.svg';
import go from '../assets/icons/technology/go.svg';
import postgresql from '../assets/icons/technology/postgresql.svg';
import mysql from '../assets/icons/technology/mysql.svg';
import redis from '../assets/icons/technology/redis.svg';
import elasticsearch from '../assets/icons/technology/elasticsearch.svg';
import aws from '../assets/icons/technology/aws.svg';
import googlecloud from '../assets/icons/technology/googlecloud.svg';
import docker from '../assets/icons/technology/docker.svg';
import kubernetes from '../assets/icons/technology/kubernetes.svg';
import cloudflare from '../assets/icons/technology/cloudflare.svg';
import asterisk from '../assets/icons/technology/asterisk.svg';
import webrtc from '../assets/icons/technology/webrtc.svg';
import whatsapp from '../assets/icons/technology/whatsapp.svg';

const logos: Record<string, string> = {
  'Next.js': nextjs,
  'React': react,
  'TypeScript': typescript,
  'Tailwind CSS': tailwind,
  'Flutter': flutter,
  'React Native': react,
  'Node.js': nodejs,
  'NestJS': nestjs,
  'Laravel': laravel,
  'Python': python,
  'Go': go,
  'PostgreSQL': postgresql,
  'MySQL': mysql,
  'Redis': redis,
  'Elasticsearch': elasticsearch,
  'AWS': aws,
  'Google Cloud': googlecloud,
  'Docker': docker,
  'Kubernetes': kubernetes,
  'Cloudflare': cloudflare,
  'Asterisk': asterisk,
  'WebRTC': webrtc,
  'WhatsApp API': whatsapp,
};

function TechnologyIcon({ name }: { name: string }) {
  if (logos[name]) return <img className="technology-logo" src={logos[name]} alt="" aria-hidden="true" draggable={false} />;
  return <svg className="technology-logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    {name === 'SIP / VoIP' ? <path fill="#7950ff" d="m5 2 4 1 2 5-3 2a14 14 0 0 0 6 6l2-3 5 2 1 4c-1 5-9 2-14-3S0 3 5 2Z" /> : <path fill="#168bff" d="M5 3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-8l-6 4v-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm2 7v3h2v-3H7Zm4 0v3h2v-3h-2Zm4 0v3h2v-3h-2Z" />}
  </svg>;
}
export default TechnologyIcon;
