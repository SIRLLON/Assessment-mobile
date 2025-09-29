import React, { createContext, useState } from 'react';
import fotoPerfil from '../assets/images/perfil.jpg';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nome: 'Sirllon Cruz',
    foto: fotoPerfil,
    email: 'sirllonsax@gmail.com',
    telefone: '(21) 99999-9999',
    linkedin: 'https://www.linkedin.com/in/sirllon-cruz/',
    cidade: 'Rio de Janeiro / Brasil',
    experienciaAtual: {
      cargo: 'Desenvolvedor Front-end',
      empresa: 'NTT DATA'
    },
     projetosPrincipais: [
      'Responsavel pela area de comprovantes do Itaú',
      'Sistema de biblioteca com JAVA',
      'App de finanças pessoais'
    ],
    educacao: [
      { formacao: 'Análise e Desenvolvimento de Sistemas', certificacao: 'Bacharelado' },
      { formacao: 'React Native Avançado', certificacao: 'Certificação INFNET' }
    ],
    skills: ['Angular','TypeScript', 'React', 'React Native', 'HTML', 'CSS', 'Git', 'Docker'],
    links: {
      github: 'https://github.com/SIRLLON',
      devto: 'https://dev.to/sirllon'
    }
  });

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <UserContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};
