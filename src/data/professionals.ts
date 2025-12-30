export type Professional = {
  id: string;
  name: string;
  role: "Psicólogo" | "Nutricionista";
  approach: string;
  areas: string[];
  bio: string;
  whatsapp: string; // número sem espaços
};

export const professionals: Professional[] = [
  {
    id: "psicologo-1",
    name: "Fabiane Aroni",
    role: "Psicólogo",
    approach: "Terapia Cognitivo-Comportamental",
    areas: ["Ansiedade", "Depressão", "Autoconhecimento"],
    bio: "Atendimento focado no acolhimento, escuta qualificada e desenvolvimento emocional.",
    whatsapp: "5511999991111",
  },
  {
    id: "psicologo-2",
    name: "Bruno Xavier",
    role: "Psicólogo",
    approach: "Psicanálise Infantil",
    areas: ["Relacionamentos", "Autoestima", "Processos emocionais"],
    bio: "Trabalho clínico voltado à compreensão profunda da história e subjetividade do paciente.",
    whatsapp: "5551986875187",
  },
  {
    id: "nutricionista-1",
    name: "Karina Costa",
    role: "Nutricionista",
    approach: "Nutrição Comportamental",
    areas: ["Comportamento alimentar", "Reeducação alimentar", "Saúde mental"],
    bio: "Acompanhamento nutricional respeitando a individualidade, sem dietas restritivas.",
    whatsapp: "5511999993333",
  },
];
