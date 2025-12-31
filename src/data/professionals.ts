export type Professional = {
  id: string;
  name: string;
  role: "Psicólogo" | "Nutricionista";
  approach: string;
  areas: string[];
  bio: string;
  whatsapp: string; // número sem espaços
  image?: string;
};

export const professionals: Professional[] = [
  {
    id: "psicologo-1",
    name: "Fabiane Aroni",
    role: "Psicólogo",
    approach: "Psicóloga Cçínica, Escolar e Educacional",
    areas: ["TEA", "TDAH", "Mães atípicas"],
    bio: "Atendimento focado no acolhimento, escuta qualificada e desenvolvimento emocional.",
    whatsapp: "555191571772",
    image: "/professionals/fabiane-aroni.jpg"
  },
  {
    id: "psicologo-2",
    name: "Bruno Costa",
    role: "Psicólogo",
    approach: "Psicanálise Infantil",
    areas: ["Relacionamentos", "Autoestima", "Processos emocionais"],
    bio: "Trabalho clínico voltado à compreensão profunda da história e subjetividade do paciente.",
    whatsapp: "5551986875187",
    image: "/professionals/bruno-costa.jpg"
  },
  {
    id: "nutricionista-1",
    name: "Karina Costa",
    role: "Nutricionista",
    approach: "Nutrição Comportamental",
    areas: ["Comportamento alimentar", "Reeducação alimentar", "Saúde mental"],
    bio: "Acompanhamento nutricional respeitando a individualidade, sem dietas restritivas.",
    whatsapp: "555191011959",
    image: "/professionals/karina-costa.jpg"
  },
];
