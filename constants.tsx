
import React from 'react';
import { Activity, Brain, Heart, Zap, Waves, Thermometer, ShieldCheck, Microscope, UserCheck } from 'lucide-react';
import { Service, Technology, Testimonial } from './types';

export const DOCTOR_NAME = "HATIM JORIO";
export const CLINIC_NAME = "KinEnergy";
export const WHATSAPP_NUMBER = "+212619770804";
export const PHONE_NUMBER = "+212619770804";
export const ADDRESS = "Imm A2, 4ème étage N° 12, Temara mall, 2 Av. Hassan II, Témara 12010";

export const GALLERY_IMAGES = [
  "https://popcard-api.getpopcard.com/images/collaborator-HATIM-JORIO-1708091134470.jpeg",
  "https://popcard-api.getpopcard.com/images/collaborator-HATIM-JORIO-1708091158635.jpeg",
  "https://popcard-api.getpopcard.com/images/collaborator-HATIM-JORIO-1708091183136.jpeg",
  "https://popcard-api.getpopcard.com/images/collaborator-HATIM-JORIO-1708091283032.jpeg"
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Kinésithérapie du Sport',
    description: 'Accompagnement personnalisé pour les athlètes, de la phase aiguë à la reprise du terrain.',
    icon: 'Activity'
  },
  {
    id: '2',
    title: 'Traumatologie',
    description: 'Rééducation post-opératoire et traitement des fractures, entorses et luxations.',
    icon: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'Neurologie',
    description: 'Prise en charge des pathologies nerveuses (AVC, Parkinson, Sclérose en plaques).',
    icon: 'Brain'
  },
  {
    id: '4',
    title: 'Rhumatologie',
    description: 'Soulagement des douleurs articulaires chroniques (Arthrose, Polyarthrite).',
    icon: 'Heart'
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'tecar',
    name: 'Tecar Therapy',
    description: 'Une forme d\'électrostimulation de haute fréquence qui stimule la capacité naturelle de réparation du corps.',
    benefits: ['Réduction rapide de la douleur', 'Accélération de la guérison tissulaire', 'Traitement non invasif'],
    imageUrl: 'https://ae-pic-a1.aliexpress-media.com/kf/Sd3b34d4d8a6445da9692e860de7915a7Y.jpg_220x220q75.jpg_.avif'
  },
  {
    id: 'laser',
    name: 'Laser Therapy',
    description: 'Thérapie par faisceau lumineux de haute intensité pour pénétrer les tissus en profondeur.',
    benefits: ['Anti-inflammatoire puissant', 'Effet analgésique immédiat', 'Efficace sur les cicatrices'],
    imageUrl: 'https://ae-pic-a1.aliexpress-media.com/kf/Sa8e45c52c0da4526bf5a7acabf3dc3dct.jpg_220x220q75.jpg_.avif'
  },
  {
    id: 'arthronomoteur',
    name: 'Arthronomoteur',
    description: 'Dispositif de mobilisation passive continue pour restaurer l\'amplitude articulaire après chirurgie.',
    benefits: ['Prévient les raideurs articulaires', 'Améliore la circulation', 'Gain d\'amplitude sans effort'],
    imageUrl: 'https://ae-pic-a1.aliexpress-media.com/kf/S4a185548324a4bc8be2d6126b18f415bB.jpg_220x220q75.jpg_.avif'
  },
  {
    id: 'cryotherapie',
    name: 'Cryothérapie',
    description: 'Application de froid thérapeutique pour traiter les inflammations et les œdèmes.',
    benefits: ['Contrôle de l\'oedème', 'Récupération musculaire post-effort', 'Effet vasoconstricteur'],
    imageUrl: 'https://ae-pic-a1.aliexpress-media.com/kf/S82735c39eb004d7ba7f93d56186c0daal.jpg?has_lang=1&ver=1_220x220q75.jpg_.avif'
  },
  {
    id: 'electrothérapie',
    name: 'Électrothérapie',
    description: 'Utilisation de courants électriques pour soulager la douleur et stimuler les muscles.',
    benefits: ['Renforcement musculaire', 'Désensibilisation nerveuse', 'Drainage lymphatique'],
    imageUrl: 'https://ae-pic-a1.aliexpress-media.com/kf/S29d0595f5e9b4a4a8e55b5e424440847H.jpg?has_lang=1&ver=2_220x220q75.jpg_.avif'
  },
  {
    id: 'pressotherapie',
    name: 'Pressothérapie',
    description: 'Technique de drainage lymphatique par compression pour les jambes lourdes et la récupération.',
    benefits: ['Améliore le retour veineux', 'Élimine les toxines', 'Sensation de légèreté immédiate'],
    imageUrl: 'https://ae-pic-a1.aliexpress-media.com/kf/S9780d3888af646f79ed9ab938cdffc30t.jpg_220x220q75.jpg_.avif'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Équipement Moderne',
    description: 'Utilisation des technologies de pointe pour des résultats optimaux.',
    icon: <Microscope className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Traitement Personnalisé',
    description: 'Chaque patient reçoit un plan de soins adapté à ses objectifs.',
    icon: <UserCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Soins Professionnels',
    description: 'Expertise médicale reconnue et formation continue.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Environnement Confortable',
    description: 'Un cabinet propre et apaisant pour votre rééducation.',
    icon: <Heart className="w-6 h-6 text-blue-600" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed B.',
    text: 'Grâce à la tecar thérapie, ma douleur à l\'épaule a disparu en 4 séances. Un vrai professionnel.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sara M.',
    text: 'Excellent accueil et matériel de haute qualité. Je recommande vivement pour la rééducation post-opératoire.',
    rating: 5
  },
  {
    id: '3',
    name: 'Karim L.',
    text: 'Expertise et écoute. Le cabinet est très bien équipé pour les sportifs.',
    rating: 5
  }
];
